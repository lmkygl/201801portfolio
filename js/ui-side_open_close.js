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

    var sideMenu_open = $('[data-ui-side="sideMenu_open"]');
    var side_menu = $('[data-ui-side="side_menu"]');
    var side_menu_close = $('[data-ui-side="sideMenu_close"]');

    // product 클릭시
    function productClick_effect(e){
        TweenMax.to(side_menu, 0.4, {left:0});
    }
    
    sideMenu_open.on('click', productClick_effect);

    // back 클릭시
    function backClick_effect(){
        TweenMax.to(side_menu, 0.4, {left:"-800px"});
    }
    
    side_menu_close.on('click', backClick_effect);


}());