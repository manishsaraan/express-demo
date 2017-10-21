var express  = require('express');
var app  = express();
var PORT = process.env.PORT || 5000;
var handlebars = require('express-handlebars');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade'); 
app.engine('.hbs', handlebars({extname : '.hbs'}));
app.set('view engine', '.hbs'); 

//starting routes
app.get('/',function(req, res){
	 res.render('index',{title : 'Hello Handlebars', list: ['1','2','3','4']});
});
app.listen(PORT,function(err){
	console.log('App is running at port : ' + PORT);
});