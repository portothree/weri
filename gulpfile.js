const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function script() {
	return src('src/**/*.js').pipe(dest('build/js'));
}

function public() {
	return src('public/**').pipe(dest('build'));
}

function watcher() {
	watch('src/**/*.js', script);
}

exports.default = series(public, script, watcher);
