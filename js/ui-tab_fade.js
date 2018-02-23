// tab 기능 , 애니메이션 fade In Out 사용

(function () {
    var $data_id = $('[data-id]');
    var $tab_wrap = $('[data-ui="tab_button_wrap"]');
    var $tab_btn = $tab_wrap.find('a');

    function tab_button(e) {
        var $target = $(e.target);
        var $target_index = $target.index();
        var tab_id;

        tab_id = tab_id = $(e.target).attr('data-id');
        
        $tab_btn.removeClass('select_a');
        $tab_btn.eq($target_index).addClass('select_a');

    }
    $tab_btn.on('click', tab_button);


}());