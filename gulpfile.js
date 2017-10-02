'use strict'

var gulp = require('gulp'),
		connect = require('gulp-connect'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		stylus = require('gulp-stylus'),
		livereload = require('gulp-livereload');

gulp.task('styles', function(){
	return gulp.src('src/styles/style.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(gulp.dest('dest/styles'))
	.pipe(livereload());
});

// gulp.task('js', function(){
// 	return browserify('./src/scripts/main.js')
// 	.bundle()
// 	.pipe(source('main.js'))
// 	.pipe(gulp.dest('dest/scripts'));
// });

gulp.task('js', function(){
	return browserify('./src/scripts/main.js')
	.bundle()
	// .on('error', function(e){
	// 	gutil.log(e);
	// })
	.pipe(source('main.js'))
	.pipe(gulp.dest('dest/scripts'));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/styles/**/*.styl', ['styles']);
	gulp.watch('src/scripts/**/*.js', ['js']);
});

gulp.task('connect', function(){
	console.log('check port :4200 bro');
	connect.server({
		root: './',
		port: 4200
	});
});

// Todo: get this task to be 'server', do all the ugly versions of shit
gulp.task('dev', ['watch', 'styles', 'js', 'connect'])
// write a task to compile shit for public
gulp.task('build', ['styles', 'js'])
