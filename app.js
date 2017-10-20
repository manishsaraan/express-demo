var express  = require('express');
var app  = express();
var PORT = process.env.PORT || 5000;

//starting routes
app.get("/",function(req, res){
	 res.send("Hello World!!!");
});
app.listen(PORT,function(err){
	console.log("App is running at port : "+PORT);
});