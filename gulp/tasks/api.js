var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').api;
/**
 * api任务: 复制api文件夹
 * cmd $ gulp api
 */
gulp.task('api', function() {
    console.log('api task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});