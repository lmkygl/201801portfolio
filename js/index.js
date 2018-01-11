(function(){


    // product 클릭시
    var productLink = $("[data-ui=productLink]");
    var side_menu = $('[data-ui="side_menu"]');
    var sideMenu_back = $('[data-ui=sidemenu_back]');
    
    productLink.click(function(){
        TweenMax.to(side_menu, .4, {left:0, onComplete: function() {
           // console.log(11)
        }});
    });

    sideMenu_back.click(function(){
        TweenMax.to(side_menu, .4, {left:"-1000px"});
    });
    

  //  var side_menu = $("[data-ui=side_nav] a");
    var sideMenu_detail = $("[data-ui=sideMenu_detail]");
    side_menu.mouseover(function() {
        sideMenu_detail.show();
        TweenMax.to(sideMenu_detail, 1, {width:"100%"})
    })
    .mouseout(function() { 
        //sideMenu_detail.hide();
       TweenMax.to(sideMenu_detail, 1, {})
       
    });

    // navi a 마우스 오버시 밑줄 생성 
   
    var navi_Link_Event = $('[data-ui="naviLink"]');

    function navi_Effect(e){
        var naviEvnet_target =$(e.target);
        var naviEvnet_type = e.type;
        var naviEvent_line = naviEvnet_target.find('.underline');
        var naviEvent_line_width = naviEvent_line.width();
        
        // console.log(naviEvnet_target);
        // console.log(naviEvnet_type);
        // console.log(naviEvent_line_width);
       
        if( naviEvnet_type === 'mouseenter' ){
           naviEvent_line.animate({width:"100%", backgroundColor:'#0D364C'}, .3 );
        }
       else if(naviEvnet_type === 'mouseleave' ){
           naviEvent_line.animate({width:0}, .3 ); 
       }    
    
    }

    navi_Link_Event.on('mouseenter mouseleave', navi_Effect);

}());
