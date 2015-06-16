var _    = require('lodash');
var gulp = require('gulp');

var fileList = require('./file-list.json');
fileList.files = _.map(fileList.files, function(filename) {
  return fileList.base + '/' + filename;
});
fileList.exclude =  _.map(fileList.exclude, function(filename) {
  return '!' + fileList.base + '/' + filename;
});
fileList.files = fileList.exclude.concat(fileList.files);

gulp.task('copy', function(){
  gulp.src(fileList.files, {base: fileList.base})
    .pipe(gulp.dest('dist'));
});

