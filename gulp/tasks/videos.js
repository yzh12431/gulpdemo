var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').videos;
/**
 * videos任务: 复制视频文件
 * cmd $ gulp videos
 */
gulp.task('videos', function(){
    console.log('videos task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});