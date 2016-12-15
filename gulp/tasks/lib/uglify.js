var gulp = require('gulp');
var config = require('../config').js;
var uglify = require('gulp-uglify');
//uglify任务 cmd $ gulp uglify
gulp.task('uglify', function(){
    // 将uglify任务代码放在这
    console.log('uglify task!');
    return gulp.src(config.src) //js源
        .pipe(uglify()) //js压缩
        .pipe(gulp.dest(config.dest)) //输出目录
});
