var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");  

var busboy = require('connect-busboy')

var fs = require('fs-extra');



var mongoose = require("mongoose");
var path = require("path");

mongoose.Promise = require('bluebird');


var app = express();

app.use(bodyParser.json());
app.use(busboy());
app.use(express.static(path.join(__dirname, "public")));

// Routes \\

app.use("/api/websites", require("./routes/WebSiteRoutes"));


mongoose.connect(config.database, function() {
    console.log("Database is connected");
})
//mongoose.connect("mongodb://localhost/WebEvalData", function() {
//    console.log("Database is connected");
//})

//app.use('/upload', express.static(__dirname + '/uploads'));
// 
//app.use(require('./apis'));

app.route('/upload')
    .post(function (req, res, next) {

        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/public/uploads/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {    
                console.log("Upload Finished of " + filename);              
             res.redirect('/#/manageWebSites');           //where to go next
              
            });
        });
    });

app.listen(8000, function() {
    console.log("server listening on port 8000");
});




//
//app.use(fileUpload());
// 
//app.post('/upload', function(req, res) {
//    console.log(req);
//  if (!req.files)
//    return res.status(400).send('No files were uploaded.');
// 
//  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
//  let sampleFile = req.files.sampleFile;
// console.log(sampleFile.fileName);
//  // Use the mv() method to place the file somewhere on your server 
//  sampleFile.mv('public/app/assets/images/filename.jpg', function(err) {
//    if (err)
//      return res.status(500).send(err);
// 
//    res.send('File uploaded!');
//  });
//});