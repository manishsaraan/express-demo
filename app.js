const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const nav = [{Link: '/Books', Text: 'books'}, {Link: '/Authors', Text: 'Authors'}];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const handlebars = require('express-handlebars');

app.use(express.static('public'));
app.set('views', './src/views');

// Code to set jade app engine
app.set('view engine', 'jade');
app.engine('.hbs', handlebars({extname: '.hbs'}));

// Code to set handlebars app engine
app.set('view engine', '.hbs');

// Code to set ejs app engine
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', (req, res) => {
	 res.render('index', {title: 'Hello from render', nav});
});
app.listen(PORT, err => {
	console.log('App is running at port : ' + PORT);
});
