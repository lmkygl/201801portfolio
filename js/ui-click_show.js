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

(function(){
    var $button = $('[data-ui="sponsorship_box"]').find('button');
    var toggled = false;

    function clickhandle(e){
        var $target = $(e.target);
        var $list = $(e.target).parents('[data-ui="sponsorship_box"]');
        var $btn = $(e.target).parents('[data-ui="sponsorship_show"]').siblings('[data-ui="sponsorship_product_area"]');

        if (!toggled) {
            toggled = true;
            $list.animate({"height":"550px"});
            TweenMax.to($btn, 0.3, {
                opacity:1,
            });
            $target.text("▲");
            return;
        }
        if (toggled) {
            toggled = false;
            $list.animate({"height":"300px"});
            TweenMax.to($btn, 0.3, {
                opacity:0,
            });
            $target.text("▼");
            return;
        }

    }
    
    $button.on('click', clickhandle);
}());