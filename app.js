var express  = require('express');
var app  = express();
var PORT = process.env.PORT || 5000;
var handlebars = require('express-handlebars');

app.use(express.static('public'));
app.set('views', './src/views');

//code to set jade app engine
app.set('view engine', 'jade'); 
app.engine('.hbs', handlebars({extname : '.hbs'}));

//code to set handlebars app engine
app.set('view engine', '.hbs'); 

//code to set ejs app engine
app.set('view engine', 'ejs');


//starting routes
app.get('/',function(req, res){
	 res.render('index',{title : 'Hello from render', list: ['1','2','3','4']});
});
app.listen(PORT,function(err){
	console.log('App is running at port : ' + PORT);
});