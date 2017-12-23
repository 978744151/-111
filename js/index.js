//-mui滚动初始化
(function($){
    $(".mui-scroll-wrapper").scroll({
//            bounce: false,//滚动条是否有弹力默认是true
//            indicators: false, //是否显示滚动条,默认是true
    });
})(mui);
//    mui点击按钮初始化
mui('body').on('tap','a',function(){document.location.href=this.href;});
//    document.getElementById("backdrop").addEventListener('tap',function() {
//        //阻止默认事件
//        event.detail.gesture.preventDefault();
//        // 移除焦点
////        document.getElementById("searchtittle").blur();
//    });
//    swiper特效事件
var mySwiper = new Swiper('.swiper-container',{
    autoplay: 3000,//可选选项，自动滑动
    speed:500,
    loop: true,
    direction: 'horizontal',
    pagination : '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
//            swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
        $('.fade').animate({
            left:"50%",
            opacity:"1",
            top: "25%"
        },1000, function () {
            $('.slide').animate({
                right:"50%",
                opacity:"1"
            },1000)
        })

    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

    }
})

//懒加载初始化
$("img").lazyload({ threshold :400});

//监听事件
$(function(){
    var offsetTop =  $('.area').offset().top;
    var height = $(window).height()-100;
    //console.log(height)
    console.log(offsetTop);
    if(offsetTop>200){
        $(".area").animate({
            marginLeft:"0%",
            opacity:"1"
        },2000)
    }
})
//监听


