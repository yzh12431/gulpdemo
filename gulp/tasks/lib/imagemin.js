var gulp = require('gulp');
var config = require('../config').images;
var imagemin = require('gulp-imagemin');
//imagemin任务 cmd $ gulp imagemin
gulp.task('imagemin', function(){
    // 将imagemin任务代码放在这
    console.log('imagemin task!');
    return gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
});