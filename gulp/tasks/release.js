var gulp = require('gulp');
var config = require('../config').release;

/**
 * release任务: 清空/build/release/项目 并重构项目
 * cmd $ gulp release --release
 */
gulp.task('release', ['clean'],function(){
    console.log('release task!');
    //build
    gulp.start('html','api','stylesheets','javascripts','images','musics','videos');
});