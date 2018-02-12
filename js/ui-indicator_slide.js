// indicator 를 이용한 슬라이드

(function () {

    var slide_start;
    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');
    var $out_frame = $('[data-ui="side_slide_out_frame"]');
    var $out_frame_width = $out_frame.width();
    var $inner_frame = $('[data-ui="side_slide_inner_frame"]');
    var speed = 2000;
    var animating = false;

    function start_slide() {
        slide_start = setInterval(slide_show, speed);
    };

    function slide_show(e) {
        // index
        var target = $(e.target);
        var target_index = target.index();
        var slideCurrent = $(".slide-active");
        var slideNext = slideCurrent.next();
        var dotCurrent = $("span.select_indicator");
        var dotNext = dotCurrent.next();
        
        if (slideNext.length == 0) {
            slideNext = $(".side_item").first();
            dotNext = $indicator_btn.first();
        }
        var slideIndex = slideNext.index();
        $out_frame.css({
          'transform': 'translate(-' + (slideIndex) * 100 + '%)'
        });
    
    
        $indicator_btn.removeClass('select_indicator');
        dotNext.addClass('select_indicator');
        
        // $indicator_btn.removeClass('select_indicator');
        // $(this).addClass('select_indicator');
        // indecator_animating(target_index);
        // console.log(target_index);
        indecator_click(e);
    }

    function indecator_click(e){

        clearInterval(start_slide);
        var target = $(e.target);
        var target_index = target.index();

        $indicator_btn.removeClass('select_indicator');
        $out_frame.eq(target_index).addClass('select_indicator');
        $(this).addClass('select_indicator');

        start_slide();

    }

    

    // function indecator_animating(index) {
    //     var out_frame = $('[data-ui="side_slide_out_frame"]');
    //     var width = out_frame.width();
    //     var inner_frame = $('[data-ui="side_slide_inner_frame"]');
    //     var item = out_frame.find('.side_item');
        
    //     inner_frame.animate({
    //         left: -out_frame*index
    //     }, speed, 'swing', function () {
    //         item.eq(0).insertAfter(item.eq(-1));
    //         inner_frame.css('left', 0);
    //         animating = false;
    //     });
    //     // console.log(width);
    //     // animate outframe width
    //     // var width = 120;

    //     // console.log('current index is ' +  aa * width);
    // }

    slide_show();
    $indicator_btn.on('click', indecator_click);
}());