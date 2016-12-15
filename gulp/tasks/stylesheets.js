var gulp = require('gulp');
var concat =  require('gulp-concat');
var mincss = require('gulp-minify-css');
var gulpif = require('gulp-if');
var configobj = require('../config').stylesheets;

/**
 * stylesheets任务: css,less,sass 任务合并加目的样式的合并压缩
 * cmd $ gulp stylesheets
 */

gulp.task('stylesheets', ['css', 'less', 'sass'], function() {
    console.log('stylesheets task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(gulpif(config.settings.concat, concat(config.settings.concatName)))
        .pipe(gulpif(config.settings.compress, mincss({compatibility: 'ie7'})))
        .pipe(gulp.dest(config.dest));
});