// indicator 를 이용한 슬라이드

(function(){

    var auto_slide;
    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');
    var speed = 20000;
    
    function slide_start() {
        auto_slide = setInterval(slide_show, speed);
    };

    function slide_show(e){
        var slideCurrent = $(".slide-active");
        var slideNext = slideCurrent.next();
        var dotCurrent = $("li.active");
        var dotNext = dotCurrent.next();
             
        var target = $(e.target);
        $indicator_btn.removeClass('select_indicator');
        $(this).addClass('select_indicator');
    }


    $indicator_btn.on('click', slide_show);
}());