(function(){
    var data_tab = $('[data-tab-id]');
   
    function show_panel(e){
        var etarget;
        var tab_id;
        var data_pannel;

        if(e.target.nodeName === 'A'){
            etarget = e.target.parentNode;
        }
        else{
            etarget = e.target;
        }

        // javascript dom
        tab_id = etarget.dataset.tabId;

        // data()
        // tab_id = $(e.target).data('tabId');

        // attr()
        // tab_id = $(e.target).attr('data-tab-id');
        
        $('[data-pannel-id]').hide();
        
        data_pannel = $('[data-pannel-id="'+ tab_id +'"]');
        data_pannel.show();
    }

    data_tab.on('mouseenter mousleave', show_panel);
}());