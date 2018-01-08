'use strict';

// Require gulp
var gulp = require('gulp');

// Require tasks
var cachebust = require('./index');

// This plugin's task
gulp.task('cachebust', function () {
	return gulp.src('test/fixtures/**/*.html')
		.pipe(cachebust({
			type: 'MD5'
		}))
		.pipe(gulp.dest('./tmp'));
});

// Default task does all of the things
gulp.task('default', [
	'cachebust'
]);
