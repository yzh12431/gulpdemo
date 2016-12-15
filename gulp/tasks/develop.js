var gulp = require('gulp');
var config= require('../config').develop;

/**
 * develop任务: 清空/build/develop/项目 并重构项目
 * cmd $ gulp develop --develop
 */
gulp.task('develop', ['clean'],function(){
    console.log('develop task!');
    //build
    gulp.start('html','api','stylesheets','javascripts','images','musics','videos');
    //watch
    gulp.start('watch');
});