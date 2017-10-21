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