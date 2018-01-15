// sidemenu open close 
/*
    <nav>
        <a href="#" title="Product" data-ui="navi_underline" data-ui-side="sideMenu_open"  class="fontbold">
            Product ∨ 
            <span class="underline"></span>
        </a>
    </nav>
    <div class="side_menu" data-ui-side="side_menu">
        <a class="side_backBtn" data-ui-side="sideMenu_close">＜ Back</a>
    </div>
*/

(function(){

     
    var product_Link = $('[data-ui-side="sideMenu_open"]');
    var side_menu = $('[data-ui-side="side_menu"]');
    var side_menu_close = $('[data-ui-side="sideMenu_close"]');

    // product 클릭시
    function productClick_Effect(e){
        TweenMax.to(side_menu, 0.4, {left:0});
    }

    // back 클릭시
    function sideMenuClose_Effect(){
        TweenMax.to(side_menu, 0.4, {left:"-800px"});
    }
        


}());