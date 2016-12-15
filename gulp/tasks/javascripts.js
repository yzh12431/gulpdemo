var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').javascripts;

/**
 * javascripts任务: 复制js文件
 * cmd $ gulp javascripts
 */

gulp.task('javascripts', function() {
    console.log('javascripts task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }

    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});