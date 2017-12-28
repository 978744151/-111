;$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplay : 10000,
        speed:1,
        loop:true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
    var mySwiper = new Swiper ('.swiper-container1', {
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplay : 10000,
        speed:1,
        loop:true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',
    })
})

//懒加载初始化
$("img").lazyload({ threshold :400});

//监听事件
;$(function(){
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


