var gulp = require('gulp'),
  handlebars = require('gulp-compile-handlebars'),
  rename = require('gulp-rename');

var colors = {
  brown: '#33312f',
  lightBrown: '#4E4B48',
  red: '#f15729',
  green: '#bfd849',
  yellow: '#f4da5c',
  blue: '#5fbae9',
  magenta: '#c76baa',
  cyan: '#66ddd2',
  white: '#ede9e6',
}

gulp.task('compile', function() {
  return gulp.src('templates/forestry-slack.txt')
    .pipe(handlebars(colors))
    .pipe(gulp.dest('themes'));
});
