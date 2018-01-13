(function(){
    // product 클릭시 
    var product_Link = $('[data-ui-side="product_Link"]');
    var side_menu = $('[data-ui-side="side_menu"]');
    var side_menu_close = $('[data-ui="sidemenu_close"]');
    
    function productClick_Effect(e){
        TweenMax.to(side_menu, 0.4, {left:0});
    }

    function sideMenuClose_Effect(){
        TweenMax.to(side_menu, 0.4, {left:"-800px"});
    }
    

    // 사이드 메뉴 영역 벗어나면 디테일 영역 없어짐 
    
    // var sidenav_width = $('[data-side-ui="side_nav"]');
    
    // function sidenavArea_Effect(e){
    //     var sidenav_width_taget = $(e.target);
    //     var sidenav_width_taget_type = e.type;
    //    // console.log(sidenav_width_taget);
       
    //     var side_menu_detail_area = $('[data-ui="side_menu_close"]');

    //     if(sidenav_width_taget_type === 'mouseleave'){
    //         //TweenMax.to(side_menu_detail_area, .3, {opacity:0});
    //          side_menu_detail_area.animate({width:0, opacity:0}, 0.3); 
    //     }
    // }
    
   // sidenav_width.on('mouseleave',sidenavArea_Effect);
    product_Link.on('click', productClick_Effect);
    side_menu_close.on('click', sideMenuClose_Effect);
        
    // back 누르고 다시 product버튼 클릭시 사이드메뉴 디테일 없어짐 구현 <- 마우스아웃 기능 아직 미구현으로 구현함 추가

    var backBtn = $('[data-side-ui="beginAfresh"]');

    function backBtn_Effect(e){
        var backBtn_target = $(e.target);
        var backBtn_type = e.type;

        var sideMenu_detail_Area = $('[data-side-ui="side_menu_area"]');
        if(backBtn_type === 'click'){
            sideMenu_detail_Area.animate({width:0,opacity: 0}, .3);
        }
    }

   // backBtn.on('click', backBtn_Effect);
}());
