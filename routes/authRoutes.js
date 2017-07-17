// routes/authRoutes.js

var express = require("express");  
var authRoutes = express.Router();  
var User = require("../models/users");  
var jwt = require("jsonwebtoken");  
var config = require("../config");

authRoutes.post("/signup", function (req, res) {

    // try to find a user with the provided email. (If it already exists, we want to tell them
    // that the email is already taken.)
    User.findOne({email: req.body.email}, function (err, existingUser) {
        if (err) return res.status(500).send(err);
        if (existingUser) return res.send({success: false, message: "That email is already taken."});

        // If the function reaches this point and hasn't `return`ed already, we're safe
        // to create the new user in the database.
        var newUser = new User(req.body);
        newUser.save(function (err, userObj) {
            if (err) return res.status(500).send(err);
            return res.send({user: userObj, message: "Successfully created new user.", success: true});
        });
    });
});

authRoutes.post("/login", function (req, res) {

    // Try to find the user with the submitted email (lowercased)
    console.log(req.body);
    User.findOne({email: req.body.email.toLowerCase()}, function (err, user) {
        if (err) return res.status(500).send(err);

        // If that user isn't in the database OR the password is wrong:
        if (!user){
            return res.status(401).send({success: false, message: "User with provided email was not found"});
        } else if(user) {
            user.checkPassword(req.body.password, function(err, match) {
                if(err) throw (err);
                if(!match) res.status(401).json({success: false, message:"Incorrect password"});
                else{
                    var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
                    var userObj = user.withoutPassword();
                    res.json({user: userObj, token: token, success: true, message: "Here's your token"});
                }
            })

        // If email and password both match an entry in the database,
        // create a JWT! Add the user object as the payload and pass in the secret.
        // This secret is like a "password" for your JWT, so when you decode it
        // you'll pass the same secret used to create the JWT so that it knows
        // you're allowed to decode it.
        
        }
    })
});

module.exports = authRoutes; 