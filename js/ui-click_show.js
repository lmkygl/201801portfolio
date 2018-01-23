(function(){
    var $product_btn = $('[data-ui="sponsorship_show"]').find('button');
    var $sponsorship_product_area = $('[data-ui="sponsorship_product_area"]');

    function product_click_effect(e){
        $sponsorship_product_area.show();
        TweenMax.to($sponsorship_product_area, 0.7, {
            opacity:1,
            top:0
        });
        
    }

    $product_btn.on('click', product_click_effect);

}());