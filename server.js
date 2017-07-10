var express = require("express");
var bodyParser = require("body-parser");
//var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// Routes \\

//app.use("/api/barber", require("./routes/BarberRoutes"));

//mongoose.connect("mongodb://localhost/Barber-data", function() {
//    console.log("Database is connected");
//})

app.listen(8000, function() {
    console.log("server listening on port 8000");
});