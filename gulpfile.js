/**
 * gulpfile.js
 *
 */
var requireDir = require('require-dir');
requireDir('./gulp/tasks', {recurse: false}); //recurse true时 tasks目录下的所有js文件