var express =  require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var config = require('../../config/database');
	var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
        },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
        },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
        },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
        },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
        },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
        },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        }
    ];

var router = function(nav){
     adminRouter.route('/addBooks')
                .get(function(req, res){
                	var url = config.url;
                	mongodb.connect(url, function(err, db){

                       var collection = db.collection('books');
                       collection.insertMany(books,function(err, result){
                            res.send(result);
                            db.close();
                       });
                	});                
                	
                });
     return adminRouter;
};
module.exports = router;
