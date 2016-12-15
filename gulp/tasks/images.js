var gulp = require('gulp');
var changed = require('gulp-changed');
var configobj = require('../config').images;

/**
 * images任务: 复制图片
 * cmd $ gulp images
 */
gulp.task('images', function(){
    // 将images任务代码放在这
    console.log('images task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});