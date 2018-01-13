(function(){

 // navi a 밑줄 효과
    
    var $navi_Link_Event = $('[data-ui="navi_Link"]');

    function navi_Effect(e) {
        var $naviEvnet_target = $(e.target);
        var naviEvnet_type = e.type;
        var $naviEvent_line = $naviEvnet_target.find('.underline');
        
        if (naviEvnet_type === 'mouseenter'){
            $naviEvent_line.animate({
                width: '100%'
            }, 0.3);
        } else if (naviEvnet_type === 'mouseleave'){
            $naviEvent_line.animate({
                width: 0
            }, 0.3); 
        }
    }
    
    $navi_Link_Event.on('mouseenter mouseleave', navi_Effect);
}());

/*
<li  data-ui="navi_Link">
    <a href="#" title="jante" data-side-ui="side_menu_detail_product">
        jante
        <span class="underline"></span>
    </a>
</li>
*/