var gulp = require('gulp');
var configobj = require('../config').sass;

/**
 * sass任务:sass文件复制输出css文件
 * cmd $ gulp sass
 */
gulp.task('sass', function(){
    console.log('sass task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }

});