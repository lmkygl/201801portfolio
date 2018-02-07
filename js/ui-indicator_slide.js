// indicator 를 이용한 슬라이드

(function(){

    var auto_slide;
    
    // function slide_start() {
    //     auto_slide = setInterval(slide_show, 20000);
    // };

    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');

    function slide_show(e){
        var target = $(e.target);
        console.log(target);
        $indicator_btn.removeClass('select_indicator');
        $(this).addClass('select_indicator');
    }


    $indicator_btn.on('click', slide_show);
}());