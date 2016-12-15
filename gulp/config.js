/*
* gulp 任务配置
*
*
* **/
/* 项目源文件目录 */
var src = './src';
var assetsSrc = src + '/assets';

/* 项目开发目的文件目录 */
var developDest = './build/develop/www';
var developAssetsDest = developDest + '/assets';

/* 项目发布目的文件目录 */
var releaseDest = './build/release/www';
var releasepAssetsDest = releaseDest + '/assets';

/* 任务配置 */
module.exports = {
    html:{
        develop: {
            all: src + "/**/*.php",
            src: src + "/*.php",
            dest: developDest,
            settings: {}
        },
        release: {
            all: src + "/**/*.php",
            src: src + "/*.php",
            dest: releaseDest,
            settings: {}
        }
    },
    api:{
        develop: {
            all: src + "/api/**/*.php",
            src: src + "/api/*.php",
            dest: developDest + "/api",
            settings: {}
        },
        release: {
            all: src + "/api/**/*.php",
            src: src + "/api/*.php",
            dest: releaseDest + "/api",
            settings: {}
        }
    },
    css: {
        develop: {
            all: assetsSrc + "/stylesheets/css/**/*.css",
            src: assetsSrc + "/stylesheets/css/**/*.css",
            dest: developAssetsDest + "/css",
            settings: {}
        },
        release: {
            all: assetsSrc + "/stylesheets/css/**/*.css",
            src: assetsSrc + "/stylesheets/css/**/*.css",
            dest: releasepAssetsDest + "/css",
            settings: {}
        }
    },
    less: {
        develop: {
            all: assetsSrc + "/stylesheets/less/**/*.less",
            src: assetsSrc + "/stylesheets/less/*.less",
            dest: developAssetsDest + "/css",
            settings: {}
        },
        release: {
            all: assetsSrc + "/stylesheets/less/**/*.less",
            src: assetsSrc + "/stylesheets/less/*.less",
            dest: releasepAssetsDest + "/css",
            settings: {}
        }
    },
    sass: {
        develop: {
            all: assetsSrc + "/stylesheets/sass/**/*.scss",
            src: assetsSrc + "/stylesheets/less/*.scss",
            dest: developAssetsDest + "/css",
            settings: {}
        },
        release: {
            all: assetsSrc + "/stylesheets/sass/**/*.scss",
            src: assetsSrc + "/stylesheets/less/*.scss",
            dest: releasepAssetsDest + "/css",
            settings: {}
        }
    },
    stylesheets:{
        develop: {
            all: developAssetsDest + "/css/**/*.css",
            src: developAssetsDest + "/css/*.css",
            dest: developAssetsDest + "/css",
            settings: {
                concat: false,
                concatName: 'global.css',
                compress: false
            }
        },
        release: {
            all: releasepAssetsDest + "/css/**/*.css",
            src: releasepAssetsDest + "/css/*.css",
            dest: releasepAssetsDest + "/css",
            settings: {
                concat: false,
                concatName: 'global.css',
                compress: true
            }
        }
    },
    javascripts:{
        develop: {
            all: assetsSrc + "/javascripts/**/*.js",
            src: assetsSrc + "/javascripts/**/*.js",
            dest: developAssetsDest + "/js",
            settings: {
                compress: false
            }
        },
        release: {
            all: assetsSrc + "/javascripts/**/*.js",
            src: assetsSrc + "/javascripts/**/*.js",
            dest: releasepAssetsDest + "/js",
            settings: {
                compress: false
            }
        }
    },
    images: {
        develop: {
            all: assetsSrc + "/images/**/*",
            src: assetsSrc + "/images/**/*",
            dest: developAssetsDest + "/images",
            settings: {
                compress: false
            }
        },
        release: {
            all: assetsSrc + "/images/**/*",
            src: assetsSrc + "/images/**/*",
            dest: releasepAssetsDest + "/images",
            settings: {
                compress: false
            }
        }

    },
    musics: {
        develop: {
            all: assetsSrc + "/musics/**/*.mp3",
            src: assetsSrc + "/musics/**/*.mp3",
            dest: developAssetsDest + "/musics",
            settings: {
                compress: false
            }
        },
        release: {
            all: assetsSrc + "/musics/**/*.mp3",
            src: assetsSrc + "/musics/**/*.mp3",
            dest: releasepAssetsDest + "/musics",
            settings: {
                compress: false
            }
        }
    },
    videos: {
        develop: {
            all: assetsSrc + "/videos/**/*.mp4",
            src: assetsSrc + "/videos/**/*.mp4",
            dest: developAssetsDest + "/videos",
            settings: {
                compress: false
            }
        },
        release: {
            all: assetsSrc + "/videos/**/*.mp4",
            src: assetsSrc + "/videos/**/*.mp4",
            dest: releasepAssetsDest + "/videos",
            settings: {
                compress: false
            }
        }
    },
    clean:{
        develop: {
            src: developDest,
            settings: {
                must: './build/'
            }
        },
        release: {
            src: releaseDest,
            settings: {
                must: './build/'
            }
        }
    },
    develop:{
        settings: {}
    },
    release:{
        settings: {}
    }
}