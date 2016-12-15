var gulp = require('gulp');
var less = require('gulp-less');
var configobj = require('../config').less;
var handleErrors = require('../util/handleErrors');
/**
 * less任务:less文件编译并输出css文件
 * cmd $ gulp less
 */
gulp.task('less', function(){
    console.log('less task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(less(config.settings))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});