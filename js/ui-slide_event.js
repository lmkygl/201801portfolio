(function(){
    var $prev_btn = $('[data-ui="prev_btn"]');
    var $next_btn = $('[data-ui="next_btn"]');
    var $out_frame = $('[data-slide-ui="out_frame"]');
    var $inner_frames = $('[data-slide-ui="inner_frame"]');
    var animating = false;
    var speed = 500;

    function next_slide_effect(e){
        var target = $(e.target);
        var inner_frame = $(e.target).parents('.sponsorship_slide_wrap').find('[data-slide-ui="inner_frame"]');
        var out_frame = $(e.target).parents('.sponsorship_slide_wrap').find('[data-slide-ui="out_frame"]');
        var inner_frame_con = inner_frame.find('.scene');
        var $width = out_frame.width();
        
        inner_frame.animate({
                left: -$width
        }, speed, 'swing', function () {
                inner_frame_con.eq(0).insertAfter(inner_frame_con.eq(-1));
                inner_frame.css('left', 0);
        });
    }

    function prev_slide_effect(e){
        var target = $(e.target);
        var inner_frame = $(e.target).parents('.sponsorship_slide_wrap').find('[data-slide-ui="inner_frame"]');
        var inner_frame_con = inner_frame.find('.scene');
        var out_frame = $(e.target).parents('.sponsorship_slide_wrap').find('[data-slide-ui="out_frame"]');
        var $width = out_frame.width();

        inner_frame.css('left', -$width);
        inner_frame_con.eq(-1).insertBefore(inner_frame_con.eq(0));
        inner_frame.animate({
                left: 0
        }, speed, 'swing');
    }


    $next_btn.on('click',next_slide_effect);
    $prev_btn.on('click',prev_slide_effect);

}());