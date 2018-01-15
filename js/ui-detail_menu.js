(function(){
    var sideMenu_Index = $('[data-side-ui="findDetail"]');
    var $ul = $('[data-side-ui="side_menu_area"]');
    var animating = false;
    
    function animate_effect($dom) {
        // $ul.animate({
        //     width:'100%',
        //     opacity:1
        // },300);

        $dom.siblings().hide();
        $dom.show();
    }

    function sideMenuDetailImg_effect(e){
        var etarget;
        var index;

        if(e.target.nodeName === 'A'){
            etarget = e.target.parentNode;
        }
        else{
            etarget = e.target;
        }

        index = $(etarget).index();

        animate_effect($ul.find('li').eq(index));
    }

    function sideMenuhide_effect(e){
        // $ul.animate({
        //     width:0,
        //     opacity:0
        // },300);
        

    }

    $('[data-side-ui="side_nav"]').on('mouseout', sideMenuhide_effect);
    //sideMenu_Index.on('mouseover mouseout', sideMenuDetailImg_effect);
}());