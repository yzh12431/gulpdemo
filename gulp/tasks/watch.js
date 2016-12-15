var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
//watch任务 cmd $ gulp watch
gulp.task('watch', function() {
    // watch html
    watch(config.html.develop.all, function () {
        console.log('html watch!');
        gulp.start('html');
    });
    //watch css
    watch(config.css.develop.all, function () {
        console.log('css watch!');
        gulp.start('stylesheets');
    });
    //watch less
    watch(config.less.develop.all, function () {
        console.log('less watch!');
        gulp.start('stylesheets');
    });
    //watch javascripts
    watch(config.javascripts.develop.all, function () {
        console.log('javascripts watch!');
        gulp.start('javascripts');
    });

    // watch images task
    watch(config.images.develop.all, function(){
        console.log('images watch!');
        gulp.start('images');
    });
});