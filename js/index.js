(function(){

    // navi a 밑줄 효과
    var navi_Link_Event = $('[data-ui="navi_Link"]');

    function navi_Effect(e){
        var naviEvnet_target =$(e.target);
        var naviEvnet_type = e.type;
        var naviEvent_line = naviEvnet_target.find('.underline');
        //  var naviEvent_line_width = naviEvent_line.width();
        
        //  console.log(naviEvnet_target);
        //  console.log(naviEvnet_type);
        //  console.log(naviEvent_line_width);
       
        if( naviEvnet_type === 'mouseenter' ){
            naviEvent_line.animate({width:"100%"}, .3);
        }
        else if(naviEvnet_type === 'mouseleave' ){
           naviEvent_line.animate({width:0}, .3); 
       }    
    
    }

   // product 클릭시 
    var product_Link = $('[data-ui-side="product_Link"]');
    var side_menu = $('[data-ui-side="side_menu"]');
    var side_menu_close = $('[data-ui="sidemenu_close"]');
    
    function productClick_Effect(e){
        TweenMax.to(side_menu, .4, {left:0});
    }

    function sideMenuClose_Effect(){
        TweenMax.to(side_menu, .4, {left:"-500px"});
    }


    navi_Link_Event.on('mouseenter mouseleave', navi_Effect);
    product_Link.on('click', productClick_Effect);
    side_menu_close.on('click', sideMenuClose_Effect);


   

//   //  var side_menu = $("[data-ui=side_nav] a");
//     var sideMenu_detail = $("[data-ui=sideMenu_detail]");
//     side_menu.mouseover(function() {
//         sideMenu_detail.show();
//         TweenMax.to(sideMenu_detail, 1, {width:"100%"})
//     })
//     .mouseout(function() { 
//         //sideMenu_detail.hide();
//        TweenMax.to(sideMenu_detail, 1, {})
       
//     });

    // navi a 마우스 오버시 밑줄 생성 
   

}());
