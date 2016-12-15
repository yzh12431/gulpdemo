var myApp ={
    windowWidth: $(window).width(),
    windowHeight: $(window).height(),
    isOnlyExternal: false,
    pages: $('.swiper-slide').size(),
    slideChangeStart: function(swiper){},
    slideChangeEnd: function(swiper) {
        //console.log(swiper.activeIndex);
        //入场触发
        //myApp.initPagesAnimation(swiper.activeIndex, myApp.pages);
        //上下滑动提示箭头初始化
        //myApp.initPagesArrow(swiper.activeIndex, myApp.pages);
        //page09
        //myApp.initPage09(swiper.activeIndex, myApp.pages);
    },
    alert: function(str,callback,data){
        $('#alert p').text(str);
        $('#alert').show();
        if(callback){
            //绑定自定义回调函数
            $('#alert .sureBtn').one('click',function(){
                //$('#alert p').text('');
                //$('#alert').hide();
                if(data){
                    callback(data);
                }else{
                    callback();
                }
            });
        }
        else{
            //默认事件
            $('#alert .sureBtn').one('click',function(){
                $('#alert p').text('');
                $('#alert').hide();
            });
        }
    },
    confirm: function(str,callback,data){
        $('#confirm p').text(str);
        $('#confirm').show();

        //绑定回调函数
        if(callback){
            $('#confirm .sureBtn').one('click',function(){
                $('#confirm .cancelBtn').unbind( "click" );
                $('#confirm p').text('');
                $('#confirm').hide();
                if(data){
                    callback(data);
                }else{
                    callback();
                }
            });
            $('#confirm .cancelBtn').one('click',function(){
                $('#confirm .sureBtn').unbind( "click" );
                $('#confirm p').text('');
                $('#confirm').hide();
            });
        }else{
            $('#confirm').one('click',function(){
                $('#confirm p').text('');
                $('#confirm').hide();
            });
        }
    },
    initPagesAnimation: function(index,pages){
        function handelPage(index){
            var str1 = '.panel-page';
            var str2 = '.animation';

            for(var i = 0; i < 12; i++){
                if(i == index - 1){
                    $(str1+utils.completeChar(index,2)+' '+str2).addClass('active');
                }else{
                    $(str1+utils.completeChar(i+1,2)+' '+str2).removeClass('active');
                }
            }

            //$(str1+index+' '+str2).addClass('active');
        }
        handelPage(index+1);
    },
    initPagesArrow: function(index,pages){
        if(index == 10){
            $('#arrowBot').hide();
        }else{
            $('#arrowBot').show();
        }
    }
};

$(function(){
    //首屏图片预加载
    var preloadImgs = [
        'assets/images/1/1.png',
        'assets/images/1/2.png',
        'assets/images/1/3.png',
        'assets/images/1/4.png',
        'assets/images/1/5.png',
        'assets/images/1/6.png',
        'assets/images/1/7.png',
        'assets/images/1/8.png',
        'assets/images/1/9.png',
        'assets/images/1/10.png',

        'assets/images/2/1.png',
        'assets/images/2/2.png',
        'assets/images/2/3.png',
        'assets/images/2/4.png',
        'assets/images/2/5.png',
        'assets/images/2/6.png',
        'assets/images/2/7.png',
        'assets/images/2/8.png',

        'assets/images/img_001.jpg'

    ];
    //$.imgpreload(preloadImgs,{
    //    each: function(){
    //    },
    //    all: function(){
    //        $('#loading').hide();
    //        $('#index .panel-page01 .animation').addClass('active');
    //    }
    //});


    //common
    //init html font-size for css remLayout
    var htmlFontSize = (myApp.windowWidth > 520 ? 520 : myApp.windowWidth) * 12 / 320 ;
    $('html').css({
        'font-size': htmlFontSize
    });

    //init page
    //$('#page').css({
    //    width : myApp.windowWidth > 520 ? 520 : myApp.windowWidth,
    //    height: myApp.windowHeight
    //});

    //bg_music_img
    //$('#bg_music_img').on('click',function(){
    //    $(this).toggleClass('active');
    //    $("#bg_music_img_clone").toggleClass('active');
    //
    //    var oAudio =  $('#audio_bg')[0];
    //    //console.log( $('#audio_bg')[0].paused);
    //    if(oAudio.paused){
    //        $('#audio_bg')[0].play();
    //    }else{
    //        $('#audio_bg')[0].pause();
    //    }
    //});

    //share
    $('#share').on('click', function(){
        $('#share').hide();
    });

    //main pages
    myApp.mySwiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        direction: 'vertical',
        resistanceRatio : 0,
        noSwiping : true,
        noSwipingClass : 'swiper-no-swiping',
        onlyExternal: myApp.isOnlyExternal,
        loop: false,
        onSlideChangeEnd: function(swiper){
            myApp.slideChangeEnd(swiper);
        },
        onSlideChangeStart: function(swiper){
            myApp.slideChangeStart(swiper);
        }
    });

    //panel-page01
    //$('#index .panel-page01 .animation').addClass('active');

});