// indicator 를 이용한 슬라이드

(function () {

    // var slide_start;
    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');
    var speed = 400;
    var animating = false;
    var start_slide = setInterval(slide_show, speed);
    
    function slide_show(e) {
        // indecator index 
        var $target = $(e.target);
        var $target_index = $target.index();
        
        $indicator_btn.removeClass('select_indicator');
        $(this).addClass('select_indicator');
    
        indecator_animating($target_index);

        var indecator_index = indecator_animating($target_index);

        indecator_index++;
        
    }    

    function indecator_animating(index) {
        // slide animate 
        var $side_out_frame = $('[data-ui="side_slide_out_frame"]');
        var $side_out_frame_width = $side_out_frame.width();
        var $side_inner_frame = $('[data-ui="side_slide_inner_frame"]');
        
        $side_inner_frame.animate({
            marginLeft: -$side_out_frame_width * index
        }, speed, 'swing');
    }

    $indicator_btn.on('click', slide_show);
}());
