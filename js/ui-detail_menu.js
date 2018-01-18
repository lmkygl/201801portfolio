// 인덱스를 이용한 사이드메뉴의 디테일메뉴 보기

(function(){
    var sideMenu_Index = $('[data-ui-side="findDetail"]');
    var $ul = $('[data-ui-side="sideMenu_detail_area"]');
    
    
    function animate_effect($dom) {
        var animating = false;
        $ul.animate({
            width:'100%',
            opacity:1
        },300,false);

        $dom.show();
        $dom.siblings().hide();
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
        $ul.animate({
            width:0,
            //opacity:0
        },300, function(){

        });
    }

    $('[data-ui-side="side_menu"]').on('mouseout', sideMenuhide_effect);
    sideMenu_Index.on('mouseover mouseout', sideMenuDetailImg_effect);
}());