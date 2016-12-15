var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').musics;
/**
 * musics任务: 复制音乐文件
 * cmd $ gulp musics
 */
gulp.task('musics', function(){
    console.log('musics task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});