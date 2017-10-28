var express = require('express');

var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var config = require('../../config/database');
var url =config.url;
var router = function (nav) {
//starting routes
    authRouter.route('/signUp').
              post(function(req, res){
                 console.log(req.body);

                 //saving user into database
                 mongodb.connect(url, function(err, db){
                    var collection = db.collection("user");
                    var user = {
                        username : req.body.userName,
                        password : req.body.password
                    };
                    collection.insert(user, function(err, result){
                        console.log(result.ops[0]);
                        req.session.user = result.ops[0];
                        req.login(result.ops[0], function(){
                         res.redirect('/auth/profile');
                        });
                    });
                 });
                 
              });
    authRouter.route('/profile')
              .get(function(req, res){               
                res.json(req.user);
              });
    return authRouter;
};


module.exports = router;