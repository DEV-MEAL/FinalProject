var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WebSiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
       imageUrl: {
        type: String,
        required: true
    },
       rate: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("websites", WebSiteSchema);