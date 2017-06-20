import screenfull from 'screenfull'
import $ from 'jquery'


require('./sass/index.scss')

var resetFs= {
    timeoutId:"null",
    performProcessing:function(){
        var ss = document.getElementById('video-wrap').clientWidth;
        var aa = ss / 1200;
        var html = document.getElementsByTagName('html')[0];
        html.style.fontSize = aa * 10 + 'px';
    },
    process:function(){
        clearTimeout(this.timeoutId);
        this.timeoutId=setTimeout(function(){
            resetFs.performProcessing();
        },100)
    }
};

$('#screen').on('click', event => {
    if (screenfull.enabled) {
        screenfull.toggle(document.getElementById('video-wrap'));
    }
});
screenfull.onchange(() => {
    resetFs.process();
    console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
    if(screenfull.isFullscreen){
        $('#video-wrap').css({'width':'100%'})
        $('#video').css({'width':'100%'})
    }
});

    var video=document.getElementById('video');

var status={code:0};//播放状态对象
    setInterval(function(){
        var time=parseFloat(video.currentTime);
        console.log(time)
        if(time>=12&&time<=13){
            if(status.code==0){
                document.getElementsByClassName('html-wrap')[0].style.display='block';
                status.code=1;
                video.pause()
            }
        }
        // console.log(video)
        // console.log(video.currentTime)
    },1000)
//
$('#submit').on('click',function(){
    document.getElementsByClassName('html-wrap')[0].style.display='none';
    video.play()
})

