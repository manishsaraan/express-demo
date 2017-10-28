var express =  require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var config = require('../../config/database');

var router = function(nav){
     adminRouter.route('/addBooks')
                .get(function(req, res){
                	var url = config.url;
                	console.log('url',url);
                	res.send('inserting books');
                });
     return adminRouter;
};
module.exports = router;
