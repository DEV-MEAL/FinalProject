var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    webSiteName: {
        type: String,
        required: true
    },
       userId: {
        type: String,
        required: true
    }
       
});

module.exports = mongoose.model("comments", CommentSchema);