var gulp = require('gulp');
var clean = require('gulp-clean');
var configobj = require('../config').clean;
/**
 * clean任务: 删除 config.src 文件夹
 * cmd $ gulp clean
 */
gulp.task('clean', function(){
    console.log('clean task!');

    if(gulp.env.release){
        var config = configobj.release;
    }else{
        var config = configobj.develop;
    }

    //防止误操作
    var must = config.settings.must;
    if(typeof config.src == 'string' && config.src.match(must) && config.src != must){
        return gulp.src(config.src)
            .pipe(clean());
    }else{
        console.log('clean error!');
    }
});