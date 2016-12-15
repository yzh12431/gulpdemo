var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').html;
/**
 * html任务: 复制html文件
 * cmd $ gulp html
 */
gulp.task('html', function() {
    console.log('html task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});