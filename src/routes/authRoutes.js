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
                 req.login(req.body, function(){
                     res.redirect('/auth/profile');
                 });
              });
    authRouter.route('/profile')
              .get(function(req, res){
                console.log(req.user);
                res.json(req.user);
              });
    return authRouter;
};


module.exports = router;