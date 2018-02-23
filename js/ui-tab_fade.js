// tab 기능 , 애니메이션 fade In Out 사용

(function () {
    var $data_id = $('[data-id]');
    var $tab_wrap = $('[data-ui="tab_button_wrap"]');
    var $tab_btn = $tab_wrap.find('a');

    function tab_button(e) {
        var $target = $(e.target);
        var tab_id;
        var tab_content;

        tab_id = $(e.target).attr('data-id');
        console.log(tab_id);
        // tab select
        $tab_btn.removeClass('select_a');
        $tab_btn.eq(tab_id).addClass('select_a');

        tab_content = $('[data-content-id="'+ tab_id +'"]');
        console.log(tab_content);
        
    }

    $tab_btn.on('click', tab_button);
}());