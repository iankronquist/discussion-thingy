var gulp = require('gulp');
var traceur = require('gulp-traceur');
var mocha = require('gulp-mocha');

gulp.task('build', function() {
	return gulp.src('*.js')
		.pipe(traceur())
		.pipe(gulp.dest('build/src'));
});

gulp.task('default', ['build',]);
