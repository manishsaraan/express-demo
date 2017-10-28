var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var config = require('../../config/database');
var url =config.url;
var router = function (nav) {
//starting routes
bookRouter.route('/')
        .get(function (req, res) {          

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.find({}).toArray(
                    function (err, results) {
                        res.render('books', {
                            title: 'Books',
                            nav: nav,
                            books: results
                        });
                    }
                );
            });

        });

bookRouter.route('/:id')
                .get(function(req, res){
                	var id = new objectId(req.params.id); 

                        mongodb.connect(url, function (err, db) {
                        var collection = db.collection('books');

                        collection.findOne({_id: id},
                            function (err, results) {
                                 res.render('bookListView', {
                                    title: 'Book List View',
                                    nav: nav,
                                    book: results
                                   });

                            }
                        );

                    });
                    
            });
    return bookRouter;
};


module.exports = router;