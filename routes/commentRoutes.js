var express = require("express");
var commentRouter = express.Router();
var Comment = require("../models/comments")


commentRouter.route("/:websiteId")
    .get(function(req, res) {
        Comment.find({websiteId: req.params.websiteId})
        .populate('userId', '_id username')
        .exec(function(err,  comments) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(comments);
            }
        });
    });

module.exports = commentRouter;