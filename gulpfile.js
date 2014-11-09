 // Require Gulp
 var gulp = require('gulp'),
 gutil = require('gulp-util');

 // Require tasks
 var cachebust = require('./index');

 // This plugin's task
 gulp.task('cachebust', function () {
 	return gulp.src('test/fixtures/**/*.html')
 	.pipe(cachebust({type: 'timestamp'}))
 	.pipe(gulp.dest('tmp'));
 });

// Default task does all of the things
gulp.task('default', [
	'cachebust'
]);
