(function(){
    var $list_box = $('[data-ui="list_box"]');
    var $btn = $list_box.find('.btns');
    var animating = false;
    var animation_speed = 500;

    function next_slide_effect(e){
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider"]');
        var $inner_frame = $parents.find('[data-ui="inner_frame"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out_frame"]').width();
        var $indcator = $parents.find('.slide_indicator_btn');

        $inner_frame.animate({
            left: -$out_width
        }, animation_speed, 'swing', function () {
            $scene.eq(0).insertAfter($scene.eq(-1));
            $inner_frame.css('left', 0);
            animating = false;
        });
    }

    function prev_slide_effect(e){
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider"]');
        var $inner_frame = $parents.find('[data-ui="inner_frame"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out_frame"]').width();

        $inner_frame.css('left', -$out_width);
        $scene.eq(-1).insertBefore($scene.eq(0));
        $inner_frame.animate({
            left: 0
        }, animation_speed, 'swing', function(){
            animating = false;
        });
    }

    function slide_effect(e) {
      var $target = $(e.target);
      if ($target.hasClass('slide_next_btn')) {
        if (!animating) {
            animating = true;
            next_slide_effect(e);
        }  
      }
      else if ($target.hasClass('slide_prev_btn')) {
          if (!animating) {
            animating = true;
            prev_slide_effect(e);
          }
      }
    }

    $btn.on('click', slide_effect);
}());