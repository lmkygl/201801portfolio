(function(){



    // product 클릭시
    var productLink = $("[data-ui=productLink]");
    var side_menu = $("[data-ui=side_menu]");
    var sideMenu_back = $('[data-ui=sidemenu_back]');
    
    productLink.click(function(){
        TweenMax.to(side_menu, .4, {left:0});
    });

    sideMenu_back.click(function(){
        TweenMax.to(side_menu, .4, {left:-500});
    });
    
    
    // navi a 마우스 오버시 밑줄 생성 
    var navi_link =$('nav a');
    
    navi_link.mouseover(function() {
         $(this).children('span').addClass('underline');
    })
    .mouseout(function() {
        $(this).children('span').removeClass('underline');
       
    });



}())