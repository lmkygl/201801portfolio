(function(){
    var $prevBtn = $('[data-click-ui="prev_btn"]');
    var $nextBtn = $('[data-click-ui="next_btn"]');
    var $out_frame = $('[data-slid-ui="out_frame"]');
    var $inner_frame = $('[data-slide-ui="inner_frame"]');
    var $circle = $('.indicator');
    var speed = 500;
    
    
    $width = $out_frame.width();
        
    $inner_frame.css({"marginLeft":"-100%"});
    $inner_frame.prepend($(".scene:last"));


    $inner_frame.css({"marginLeft":"-"+$width+"px"});

    function nextbtn_click_effect(e){
        var $target = $(e.target);
        var $width = $out_frame.width();
        
        $inner_frame.stop().animate(
            {"marginLeft":"-="+$width+"px"},
            speed,
            function(){
            $inner_frame.append($(".silde_list:first"));
            $inner_frame.css({"marginLeft":"-"+$width+"px"});
        }
        );

    }

    function indicator_slide_effect($indicator){
        $indicator.addClass('indicator_line');
        
    }

    function indicator_effect(e){
        var etarget;
        var index;

        if(e.target.nodeName === 'SPAN'){
            etarget = e.target;
        }
        
        index = $(etarget).index();
        indicator_slide_effect($circle.find('span').eq(index));
    }

    $out_frame.each(function () {
                    
        var btn = $(this).find('span');
        var ind = btn.index();
        
        console.log(btn);

        btn.on('click',function(){
            btn.removeClass('indicator_line');
            $(this).addClass('indicator_line');

        });
    });


    $circle.on('click', indicator_effect);
    $nextBtn.on('click', nextbtn_click_effect);
  

}());

