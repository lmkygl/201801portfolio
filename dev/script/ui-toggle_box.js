// 버튼 클릭시 하단의 내용 보여줌
/* 
    <div class="sponsorship_info_wrap"  data-ui="sponsorship_show">
        <div class="sponsorship_info">
            <p class="sponsorship_product_list_btn">
                <button>▼</button>
            </p>
        </div>
    </div>
    <ul class="sponsorship_product" data-ui="sponsorship_product_area">
        <li>
            <p>
                <img src="./img/ontv_product_list5.png" alt="아틀리에 디저트접시"/>
            </p>
            <p class="product_name">
                <span class="product_sort">아틀리에</span>
                디저트 접시
            </p>
        </li>
    </ul>
*/

(function() {
    var $button = $('[data-ui="toggle_box"]').find('button');
    var toggled = false;
    var animating = false;
    
    function toggle_effect(e){
        var $target = $(e.target);
        var $sponsorship_box = $(e.target).parents('[data-ui="toggle_box"]');
        var $product_area = $(e.target).parents('[data-ui="toggle_box"]').siblings('[data-ui="sponsorship_product_area"]');
        
        if (!animating) {
            animating = true;
            if (!toggled) {
                toggled = true;
                $sponsorship_box.animate({
                    "height":"550px"
                });
                $product_area.animate({
                    'opacity':'1'
                });
                $target.text("▲");
                return ;
            }
        }
        if (animating){
            animating = false;

            if (toggled) {
                toggled = false;
                $sponsorship_box.animate({
                    "height":"300px"
                });
                $product_area.animate({
                    "opacity":"0"
                });
                $target.text("▼");
                return;
            }
        }

        
    }
    
    $button.on('click', toggle_effect);
}());
