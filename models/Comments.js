var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    websiteId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "websites"
    },
       userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"   
    }
       
});

module.exports = mongoose.model("comments", CommentSchema);