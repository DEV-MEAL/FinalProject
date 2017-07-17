var express = require("express");

 
var websitesRouter = express.Router();

var webSite = require("../models/websites")






websitesRouter.route("/")
    .get(function(req, res) {
        webSite.find(function(err, websites) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(websites);
            }
        })
//        res.send(barbers);
    })

    .post(function(req, res) {
           var newWebSite = new webSite(req.body);
        console.log(newWebSite);
        newWebSite.save(function(err, newWebSite) {
            if(err) {
                console.log(err)
                res.status(500).send(err);
            } else {
                res.send(newWebSite);
            }
        });
    });

websitesRouter.route("/:id")
    .get(function(req, res) {
        webSite.findById(req.params.id,function(err, website) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(website);
            }
        })
//        res.send(barbers);
    })
    .delete(function(req, res) {
        webSite.findByIdAndRemove(req.params.id, function(err, deletedWebSite) {
            if(err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully delete the WebSite",
                    Barber: deletedWebSite
                };
                res.send(responseObj);
            }
        });
    })

    .put(function(req, res) {
        webSite.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedWebSite) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(updatedWebSite);
            }
        })
    })

module.exports = websitesRouter;