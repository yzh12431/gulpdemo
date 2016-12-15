/*
 *
 *  yzh
 *  2016-12-15
 *
 * */

 //nameSpace
var yzh = yzh || {};
yzh.log = function(){
    console.log(arguments);
}

var ClassManager = {
    id : (0|(Math.random()*998)),

    instanceId : (0|(Math.random()*998)),

    getNewID : function(){
        return this.id++;
    },

    getNewInstanceId : function(){
        return this.instanceId++;
    }
};


/*
 *  className: Class
 *  yzh
 *  2016-04-15
 *
 * */
yzh.Class = function () {};

//兼容requestAnimationFrame
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
        window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());


/*
 *  className: Tween
 *  yzh
 *  2016-05-04
 *  缓动（单例）
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 * */
function Tween(){
}
Tween.prototype.linear = function(t, b, c, d){
    return c*t/d + b;
}
Tween.prototype.quad = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOut: function(t, b, c, d) {
        return -c *(t /= d)*(t-2) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t-2) - 1) + b;
    }
};
Tween.prototype.cubic = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOut: function(t, b, c, d) {
        return c * ((t = t/d - 1) * t * t + 1) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
        return c / 2*((t -= 2) * t * t + 2) + b;
    }
};
Tween.prototype.quart = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t*t + b;
    },
    easeOut: function(t, b, c, d) {
        return -c * ((t = t/d - 1) * t * t*t - 1) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t*t - 2) + b;
    }
};
Tween.prototype.quint = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOut: function(t, b, c, d) {
        return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2*((t -= 2) * t * t * t * t + 2) + b;
    }
};
Tween.prototype.sine = {
    easeIn: function(t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOut: function(t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOut: function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t/d) - 1) + b;
    }
};
Tween.prototype.expo = {
    easeIn: function(t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOut: function(t, b, c, d) {
        return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOut: function(t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
};
Tween.prototype.circ = {
    easeIn: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t/d - 1) * t) + b;
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
};
Tween.prototype.elastic = {
    easeIn: function(t, b, c, d, a, p) {
        var s;
        if (t==0) return b;
        if ((t /= d) == 1) return b + c;
        if (typeof p == "undefined") p = d * .3;
        if (!a || a < Math.abs(c)) {
            s = p / 4;
            a = c;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOut: function(t, b, c, d, a, p) {
        var s;
        if (t==0) return b;
        if ((t /= d) == 1) return b + c;
        if (typeof p == "undefined") p = d * .3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p/(2*Math.PI) * Math.asin(c/a);
        }
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    },
    easeInOut: function(t, b, c, d, a, p) {
        var s;
        if (t==0) return b;
        if ((t /= d / 2) == 2) return b+c;
        if (typeof p == "undefined") p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2  *Math.PI) * Math.asin(c / a);
        }
        if (t < 1) return -.5 * (a * Math.pow(2, 10* (t -=1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
    }
};
Tween.prototype.back = {
    easeIn: function(t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOut: function(t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        return c * ((t = t/d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOut: function(t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2*((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
};
Tween.prototype.bounce = {
    easeIn: function(t, b, c, d) {
        return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
    },
    easeOut: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOut: function(t, b, c, d) {
        if (t < d / 2) {
            return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
        } else {
            return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    }
};
yzh.tween = new Tween();





/*
*  className: Schedule
*  yzh
*  2016-04-15
*  定时器
* */
 function Schedule(callback,context,interval,repeats,delay,isReady){
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    this.count = 1;
    this.repeats = repeats;
    this.done = false;
    this.paused = isReady || false;
    this.now = null;
    this.then = new Date().getTime();
    this.interval = interval;
    this.delta = null;
    this.callback = callback;
    this.context = context;


    var _that = this;
    setTimeout(function(){
        _that.tick();
    },delay);

}
Schedule.prototype.tick = function(){
    var _that = this;

    if(!_that.done){
        if(window.requestAnimationFrame){
            requestAnimationFrame(_that.tick.bind(_that));
        }else{
            setTimeout(_that.tick.bind(_that), _that.interval);
        }
    }


    if(_that.paused){
        return;
    }
    else{
        if(!_that.done){
            if(window.requestAnimationFrame){
                //requestAnimationFrame(_that.tick);
                _that.now = new Date().getTime();
                _that.delta = _that.now - _that.then;
                if (_that.delta > _that.interval) {
                    //_that.then = _that.now;
                    _that.then = _that.now - (_that.delta % _that.interval);
                    _that.callback.call(_that.context);
                    _that.count++;
                    if(_that.count > _that.repeats){
                        _that.done = true;
                    }
                }
            }
            else{
                //setTimeout(_that.tick, _that.interval);
                _that.callback.call(_that.context);
                _that.count++;
                if(_that.count > _that.repeats){
                    _that.done = true;
                }
            }
        }
    }

}
Schedule.prototype.pause = function(){
    this.paused = true;
}
Schedule.prototype.play = function(){
    this.paused = false;
}
Schedule.prototype.close = function(){
    this.done = true;
}
Schedule.REPEAT_FOREVER = Number.MAX_VALUE;


/*
 *  className: ScratchCard
 *  yzh
 *  2016-04-15
 *  刮刮奖 canvas
 * */
function ScratchCard(obj){
    var _that = this;

    this.switch = obj.switch
    this.id = obj.id;
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    this.canvas.width = obj.w;
    this.canvas.height = obj.h;
    this.cover = obj.cover;
    this.r = obj.r;
    if(obj.per && obj.cb){
        this.per = obj.per;
        this.cb = obj.cb;
    }
    if(obj.startCb){
        this.startCb = obj.startCb;
        this._startFlag = true;
    }

    if(obj.mirrorCanvas){
        this.mirror = obj.mirrorCanvas;
        this.mirrorCanvas = document.getElementById(this.mirror);
    }

    this.mouseUp = obj.mouseUp;
    this.mouseUpDiv = document.getElementById(this.mouseUp);


    this.coverImg = new Image();
    this.coverImg.addEventListener('load', function () {
        //console.log('canvas cover 图片预加载好了！');
        _that.init();
        if(_that.switch){
            _that.addTouch();
            _that.addMouse();
        }
    });
    this.coverImg.src = this.cover;
}
ScratchCard.prototype.init = function(){
    this.context.save();
    this.context.setTransform(1,0,0,1,0,0);
    //this.context.translate(10,10);
    //this.context.scale(1,1);
    this.context.beginPath();
    this.context.drawImage(this.coverImg,0,0);
    this.context.closePath();
    this.context.setTransform(1,0,0,1,0,0);
    this.context.restore();
};
ScratchCard.prototype.addTouch = function(){
    var _that = this;
    var newMoveHandel = _that.moveHandel.bind(_that);
    //添加触摸事件
    this.canvas.addEventListener('touchstart', function(e){
        //console.log('touch start!');
        _that.canvas.addEventListener('touchmove', newMoveHandel);
    });
    this.canvas.addEventListener('touchend', function(e){
        //console.log('touch end!');
        _that.canvas.removeEventListener('touchmove', newMoveHandel);
        _that.endHandel(e);
    });


    if(this.mirrorCanvas){
        this.mirrorCanvas.addEventListener('touchstart', function(e){
            //console.log('touch start!');
            _that.mirrorCanvas.addEventListener('touchmove', newMoveHandel);
        });
        this.mirrorCanvas.addEventListener('touchend', function(e){
            //console.log('touch end!');
            _that.mirrorCanvas.removeEventListener('touchmove', newMoveHandel);
            _that.endHandel(e);
        });
    }
};
ScratchCard.prototype.addMouse = function(){
    var _that = this;
    var newMoveHandel = _that.moveHandel.bind(_that);
    //添加鼠标事件
    this.canvas.addEventListener('mousedown', function(e){
        //console.log('mouse start!');
        _that.canvas.addEventListener('mousemove', newMoveHandel);
    });
    this.mouseUpDiv.addEventListener('mouseup', function(e){
        //console.log('mouse end!');
        _that.canvas.removeEventListener('mousemove',newMoveHandel);
        _that.endHandel(e);
    });

    if(this.mirrorCanvas){
        this.mirrorCanvas.addEventListener('mousedown', function(e){
            //console.log('mouse start!');
            _that.mirrorCanvas.addEventListener('mousemove', newMoveHandel);
        });
        this.mouseUpDiv.addEventListener('mouseup', function(e){
            //console.log('mouse end!');
            _that.mirrorCanvas.removeEventListener('mousemove',newMoveHandel);
            //_that.endHandel(e);
        });
    }
};
ScratchCard.prototype.moveHandel = function(e){
    var point = this.getCanvasPoint(e);
    //console.log(point);

    this.context.save();
    this.context.globalCompositeOperation="destination-out";
    this.context.fillStyle = "#f00";
    this.context.setTransform(1,0,0,1,0,0);
    //this.context.translate(10,10);
    //this.context.scale(1,1);
    this.context.beginPath();
    this.context.arc(point.x, point.y, this.r, 0, Math.PI*2);
    this.context.fill();
    this.context.closePath();
    this.context.setTransform(1,0,0,1,0,0);
    this.context.restore();

    if(this.startCb){
        if( this._startFlag){
            this._startFlag = false;
            this.startCb();
        }
    }
};
ScratchCard.prototype.endHandel = function(e){
    if(this.per && this.cb){
        //计算已刮面积达标
        var num = 0;
        var datas = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        var w = datas.width;
        var h = datas.height;
        var total = datas.data.length;
        var totalPix = parseInt(total/4);
        var per = this.per/100;
        var targetPix = parseInt(totalPix * per);

        for(var i = 0; i < h; i++){
            for(var j = 0; j < w; j++){
                var p = i*w + j;
                if(datas.data[4*p+3] == 0){
                    num ++;
                }
            }
        }

        //console.log(num +":::"+ targetPix +":::"+totalPix);

        if(num >= targetPix){
            //console.log('达到'+per*100+'%面积！');
            //清空刮奖区
            this.clearCanvas();

            //调用自定义回调函数
            this.cb();

        }
    }
};
ScratchCard.prototype.getCanvasPoint = function(event){
    var rect = this.canvas.getBoundingClientRect();
    //console.log(event.type);
    if(event.type == 'touchmove'){
        return {
            x: parseInt((event.targetTouches[0].clientX - rect.left)*this.canvas.width/rect.width) ,
            y: parseInt((event.targetTouches[0].clientY - rect.top)*this.canvas.height/rect.height)
        }
    }else if(event.type == 'mousemove'){
        return {
            x: parseInt((event.clientX - rect.left)*this.canvas.width/rect.width) ,
            y: parseInt((event.clientY - rect.top)*this.canvas.height/rect.height)
        }
    }else{
        console.log('事件类型错误！');
        return -1;
    }
};
ScratchCard.prototype.clearCanvas = function(){
    this.context.save();
    this.context.globalCompositeOperation="destination-out";
    this.context.fillStyle = "#000";
    this.context.setTransform(1,0,0,1,0,0);
    this.context.beginPath();
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fill();
    this.context.closePath();
    this.context.setTransform(1,0,0,1,0,0);
    this.context.restore();
};


/*
 *  className: Bottle -》 Schedule
 *  yzh
 *  2016-04-15
 *  精灵无规则运动
 * */
function Bottle(obj){

    this.ele = obj.ele;
    this.position = {
        x:0,
        y:0
    };
    this.range ={
        w:10,
        h:10
    };
    this.distance = 0.6;
    this.angle = Math.floor(Math.random()*360);
    this.speed = {
        x: Number((Math.sin(2*Math.PI/360*this.angle)*this.distance).toFixed(2)),
        y: Number((Math.cos(2*Math.PI/360*this.angle)*this.distance).toFixed(2))
    };
    //console.log(this.speed);
    this.bottleTimer = new Schedule(this.bottleMove,this,50,Schedule.REPEAT_FOREVER,0);
}
Bottle.prototype.bottleMove = function(){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if(this.position.x > this.range.w/2){
        this.position.x = this.range.w/2;
        this.speed.x *= -1;
    }
    if(this.position.x < -this.range.w/2){
        this.position.x = -this.range.w/2;
        this.speed.x *= -1;
    }
    if(this.position.y > this.range.h/2){
        this.position.y = this.range.h/2;
        this.speed.y *= -1;
    }
    if(this.position.y < -this.range.h/2){
        this.position.y = -this.range.h/2;
        this.speed.y *= -1;
    }
    this.ele.css({
        'left': this.position.x + 'px',
        'top': this.position.y + 'px'
    });
}



/*
 *  className: CountDown -》 Schedule
 *  yzh
 *  2016-04-15
 *  倒计时
 * */
function CountDown(obj){
    this.ele = obj.ele;
    this.callback = obj.callback;
    this.configTime =obj.configTime;
    this.addTime = 0;
    this.countdownTimer = null;

    //初始化操作
    this.init();
}
CountDown.prototype.init = function(){
    this.addTime = 0;
    if(this.countdownTimer){
        this.countdownTimer.close();
    }
    this.countdownTimer = new Schedule(this.updateTime,this,1000,Schedule.REPEAT_FOREVER,0,false);
}
CountDown.prototype.start = function(){
    this.countdownTimer.play();
}
CountDown.prototype._reset = function(){
    this.addTime = 0;
    if(this.countdownTimer){
        this.countdownTimer.close();
    }
    this.countdownTimer = new Schedule(this.updateTime,this,1000,Schedule.REPEAT_FOREVER,0,false);
}
CountDown.prototype.reset = function(){
    this.addTime = 1;
    if(this.countdownTimer){
        this.countdownTimer.close();
    }
    this.countdownTimer = new Schedule(this.updateTime,this,1000,Schedule.REPEAT_FOREVER,0,false);
}
CountDown.prototype.close = function(){
    this.addTime = 0;
    if(this.countdownTimer){
        this.countdownTimer.close();
    }
    //this.countdownTimer = new Schedule(this.updateTime,this,1000,Schedule.REPEAT_FOREVER,0);
    //this.countdownTimer.pause();
}
CountDown.prototype.updateTime = function(){
    if(this.addTime > this.configTime){
        this._reset();
        this.callback();
    }
    $(this.ele).text(this.configTime - this.addTime);
    this.addTime++;
}

/*
 *  className: SpriteAni -》 Schedule
 *  yzh
 *  2016-12-15
 *  精灵动画
 * */
function SpriteAni(obj){
    this.eles = $(obj.eles);
    this.counts = $(obj.eles).length;
    this.callback = obj.callback;
    this.frequency =obj.frequency;
    this.loop = obj.loop;
    this.auto = obj.auto;
    this.num = obj.num;
    this.frameTimer = null;

    //初始化操作
    this.init();
}
SpriteAni.prototype.init = function(){
    if(this.frameTimer){
        this.frameTimer.close();
    }
    this.frameTimer = new Schedule(this.updateFra,this,this.frequency,Schedule.REPEAT_FOREVER,0,!this.auto);
}
SpriteAni.prototype.start = function(){
    this.frameTimer.play();
}
SpriteAni.prototype.close = function(){
    this.num = 0;
    if(this.frameTimer){
        this.frameTimer.close();
    }
}
SpriteAni.prototype.updateFra = function(){
    var currentDom = $(this.eles).filter(".active");
    var current = $(currentDom).index();
    var next = (current + 1) % this.counts;
    $(currentDom).removeClass('active');
    $(this.eles).eq(next).addClass('active');
    if(next == 0){
        if(this.num > 0){
            this.num--;
        }
        this.callback();
        if(this.loop){

        }else{
            if(this.num > 0){

            }else{
                this.close();
            }
        }
    }
}