<!DOCTYPE html>
<html lang="zh_cn">
<head>
    <meta charset="utf-8" />
    <title>网页title</title>
    <meta name="viewport" content="width=device-width , initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <meta name="language" content="zh_cn" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta http-equiv="cleartype" content="on" />
    <meta name="format-detection" content="telephone=no,email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-touch-fullscreen" content="no" />
    <!--<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico"/>-->
    <link href="assets/css/lib/swiper3.1.0.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/global.css" rel="stylesheet" type="text/css" />

    <!--    下面三行上线时注释掉-->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

</head>
<body>
<div id="page">
    <!--bg_music-->
<!--    <div style="display:none;">-->
<!--        <audio id="audio_bg" src="assets/musics/audio_bg.mp3" preload="auto" autoplay="autoplay" loop="loop"></audio>-->
<!--    </div>-->

    <!--bg_music_img-->
<!--    <div id="bg_music_img">-->
<!--        <a href="javascript:void(0)">-->
<!--            <img class="on" src="assets/images/ui/musicBgOn_v1.png" alt="" />-->
<!--            <img class="off" src="assets/images/ui/musicBgOff_v1.png" alt="" />-->
<!--        </a>-->
<!--    </div>-->


    <!--alert-->
    <div id="alert">
        <div class="dialog">
            <p></p>
            <div class="button sureBtn">确定</div>
        </div>
    </div>

    <!--confirm-->
    <div id="confirm">
        <div class="dialog">
            <p></p>
            <div class="button sureBtn">确定</div>
            <div class="button cancelBtn">取消</div>
        </div>
    </div>

    <!--loading-->
    <div id="loading">
        <div class="loadingImg">
            <img src="assets/images/ui/loading.png" alt=""/>
        </div>
    </div>

    <!--share-->
    <div id="share">
        <div class="share_i"><img src="assets/images/ui/share.png" alt="" /></div>
    </div>

    <!--popups-->
    <!--popupForDemo-->
    <div id="popupForDemo" class="popup">
    </div>


    <div id="pageBody">
        <div id="index" class="common">
            <!--main pages -->
            <div class="swiper-container">

                <div class="swiper-wrapper">

                    <!--panel-page01-->
                    <div class="swiper-slide panel-page01">

                        <div class="demo animation"><img src="assets/images/ui/musicBgOn_v2.png" alt=""/></div>

                    </div>

                    <!--panel-page02-->
                    <div class="swiper-slide panel-page02">

                        <div class="demo animation"><img src="assets/images/ui/musicBgOn.png" alt=""/></div>

                    </div>


                </div>

            </div>
        </div>
    </div>
</div>

<!--JS依赖库-->
<script type="text/javascript" src="assets/js/lib/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="assets/js/lib/swiper-3.3.1.jquery.min.js"></script>
<script type="text/javascript" src="assets/js/mylib/class.js"></script>
<script type="text/javascript" src="assets/js/mylib/utils.js"></script>
<!--app程序入口-->
<script src="assets/js/index.js"></script>
</body>
</html>