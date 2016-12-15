var gulp = require('gulp');
var less = require('gulp-less');
var configobj = require('../config').css;

/**
 * css任务:css文件复制输出css文件
 * cmd $ gulp css
 */
gulp.task('css', function(){
    console.log('css task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});