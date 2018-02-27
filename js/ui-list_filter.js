// list filter 
(function () {
    var $search_text = $('[data-ui="search_text"]');
    var $search_btn = $('[data-ui="search_btn"]');

    function list_search(e) {
        var $search_val = $(this).val();
        var $list = $('.store_info').find('li');
        if ($search_val == '') {
            $list.show();
        } else {
            $list.hide();
            $('.store_info li:contains("' + $search_val + '")').show();
        }
    }
    $search_text.on('keyup', list_search);
}());