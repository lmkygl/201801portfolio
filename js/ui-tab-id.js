//data- 를 이용하여 value 값이 같을 경우 디테일 메뉴 보여짐.
/* 
    // javascript dom
    tab_id = etarget.dataset.tabId;
    
    // data()
    // tab_id = $(e.target).data('tabId');

    // attr()
    // tab_id = $(e.target).attr('data-tab-id');
*/

(function(){
    
    var $data_tab = $('[data-tab-id]');
    var $sideMenu_detailAera = $('[data-ui-side="sideMenu_detail_area"]');
    var $side_navi = $('[data-ui-side="side_menu"]');
    
    function show_panel(e){
        var etarget;
        var tab_id;
        var data_pannel;

        if (e.target.nodeName === 'A') {
            etarget = e.target.parentNode;
        }
        else {
            etarget = e.target;
        }

        // javascript dom
        tab_id = etarget.dataset.tabId;

        TweenMax.to($sideMenu_detailAera, 0.3, {
            width:'110%',
            opacity:1
        });
        
        TweenMax.to($('[data-pannel-id]'), 0.3, {
            opacity:0
        });
        
        data_pannel = $('[data-pannel-id="'+ tab_id +'"]');
        
        TweenMax.to(data_pannel, 0.5, {
            width:'100%',
            opacity:1
        });
    }

    function sideMenu_deatilClose(e) {
        TweenMax.to($sideMenu_detailAera, 0.4, {
            width:0,
            opacity:0
        });
    }

    $side_navi.on('mouseleave', sideMenu_deatilClose);
    $data_tab.on('mouseenter mousleave', show_panel);
}());