var express = require("express");
var commentAuthRouter = express.Router();
var Comment = require("../models/comments")


commentAuthRouter.route("/:websiteId")

    .post(function(req, res) {
        var newComment = new Comment(req.body);
        newComment.websiteId = req.params.websiteId;
        newComment.userId = req.user._id;
        newComment.save(function(err, comment) {
            if(err) {
                console.log(err)
                res.status(500).send(err);
            } else {
                res.send(comment);
            }
        });
    });


module.exports = commentAuthRouter;