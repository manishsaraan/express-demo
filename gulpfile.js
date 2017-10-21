var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFile = ['*.js','src/**/*.js'];

gulp.task('style',function(){
     return gulp.src(jsFile)
         .pipe(jshint())
         .pipe(jshint.reporter('jshint-stylish',{
         	verbose : true
         }))
         .pipe(jscs());
});

gulp.task('inject', function(){
	 var wiredep = require('wiredep').stream;
	 var inject = require('gulp-inject');
	 var injectSrc = gulp.src(['./public/css/*.css',
	 	                       'public/js/*.js'],{read : false});

	 var injectOption = {
	 	 ignorePath : '/public'
	 };
	 var options = {
	 	 bowerJson : require('./bower.json'),
	 	 directory : './public/lib',
	 	 ignorePath : '../../public'
	 }

	 return gulp.src('./src/views/*.html')
	            .pipe(wiredep(options))
	            .pipe(inject(injectSrc,injectOption))
	            .pipe(gulp.dest('./src/views'));
});