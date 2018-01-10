(function(){



    // product 클릭시
    var productLink = $("[data-ui=productLink]");
    var side_menu = $("[data-ui=side_menu]");
    var sideMenu_back = $('[data-ui=sidemenu_back]');
    
    productLink.click(function(){
        TweenMax.to(side_menu, .3, {left:0});
    });
    
    sideMenu_back.click(function(){
        TweenMax.to(side_menu, .3, {left:-500});
    });
    
    
    
    //사이드 메뉴 링크 마우스 오버시 밑줄
    var side_menu_link = $("[data-ui=side_menu] a");

    side_menu_link.mouseover(function() {
        $(this).children('span').addClass('test');
    })
    .mouseout(function() {
        $(this).children('span').removeClass('test');
       
    });



}())