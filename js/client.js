(function () {
    var counter = $('[data-ui="counter"]');
    var btn = counter.find('button');
    var min = 0;
    var max = counter.data('max');
    var current = parseInt(counter.find('.current').val());
    var input = counter.find('input');

    function counter(val) {
        
    }

    function handler(e) {
        var target = $(e.target);

        if (target.hasClass('plus')) {
            input.val(current += 1);

            if (max < current) {
                input.val(current = min);
            }

        } else {
            input.val(current -= 1);

            if (0 > current) {
                input.val(current = max);
            }
        }
    }

    btn.on('click', handler);
}());
// 인덱스를 이용한 사이드메뉴의 디테일메뉴 보기

(function () {
    var sideMenu_Index = $('[data-ui-side="findDetail"]');
    var $ul = $('[data-ui-side="sideMenu_detail_area"]');


    function animate_effect($dom) {
        var animating = false;
        $ul.animate({
            width: '100%',
            opacity: 1
        }, 300, false);

        $dom.show();
        $dom.siblings().hide();
    }

    function sideMenuDetailImg_effect(e) {
        var target = $(e.target);
        var etarget;
        var index;

        if (e.target.nodeName === 'A') {
            etarget = e.target.parentNode;
        } else {
            etarget = e.target;
        }

        index = $(etarget).index();

        animate_effect($ul.find('li').eq(index));
    }

    function sideMenuhide_effect(e) {
        $ul.animate({
            width: 0,
            //opacity:0
        }, 300, function () {

        });
    }

    $('[data-ui-side="side_menu"]').on('mouseout', sideMenuhide_effect);
    sideMenu_Index.on('mouseover mouseout', sideMenuDetailImg_effect);
}());
// indicator 를 이용한 슬라이드

(function () {
    var interval;
    var $indicator = $('.indicator');
    var $indicator_btn = $indicator.find('span');
    var speed = 300;
    var animating = false;
    var index = 0;
    
    function slide_show(e, index) {
        // indecator index 
        if (e !== null) {
            // event 값이 널값이 아닐 경우
            var $target = $(e.target);
            var $target_index = $target.index();
            // clearInterval(interval);
            // console.log($target_index);
            $indicator_btn.removeClass('select_indicator');
            $indicator_btn.eq($target_index).addClass('select_indicator');

            indecator_animating($target_index);
            
        } else {
            $indicator_btn.removeClass('select_indicator');
            $indicator_btn.eq(index).addClass('select_indicator');
           
        }
    }

    function indecator_animating(idx) {
        // slide animate 
        var $side_out_frame = $('[data-ui="side_slide_out_frame"]');
        var $side_out_frame_width = $side_out_frame.width();
        var $side_inner_frame = $('[data-ui="side_slide_inner_frame"]');

        $side_inner_frame.animate({
            marginLeft: -$side_out_frame_width * idx
        }, speed, 'swing');
    }
    
    function startInterval() {
        clearInterval(interval);
        interval = setInterval(function() {
            // var index = 0; 
            index++;
            if (index == 3) {
                index = 0;
            }
            indecator_animating(index);
            slide_show(null, index);
        }, 2000);
    }

    $indicator_btn.on('click', slide_show);

    $(window).on('load blur focus', function(e) {
        if (e.type === 'blur') {
            clearInterval(interval);
        } else {
            startInterval();
        }
    });
}());
// list filter 
(function () {
    var $search_text = $('[data-ui="search_text"]');
    var $search_btn = $('[data-ui="search_btn"]');

    function list_search(e) {
        var $search_val = $search_text.val();
        var $list = $('.store_info').find('li');
        if ($search_val == '') {
            $list.show();
        } else {
            $list.hide();
            $('.store_info li:contains("' + $search_val + '")').show();
        }
    }
    $search_btn.on('click', list_search);
}());
// navi a 밑줄 효과

/*
<li  data-ui="navi_underline">
    <a href="#" title="jante" data-side-ui="side_menu_detail_product">
        jante
        <span class="underline"></span>
    </a>
</li>
*/

(function(){
    var $navi_link_event = $('[data-ui="navi_underline"]');

    function navi_effect(e) {
        var $naviEvnet_target = $(e.target);
        var naviEvnet_type = e.type;
        var $naviEvent_line = $naviEvnet_target.find('.underline');
        
        if (naviEvnet_type === 'mouseenter') {
            $naviEvent_line.animate({
                width: '100%'
            }, 0.3);
        } else if (naviEvnet_type === 'mouseleave') {
            $naviEvent_line.animate({
                width: 0
            }, 0.3); 
        }
    }
    
    $navi_link_event.on('mouseenter mouseleave', navi_effect);
}());


(function(){    

    // 애니메이션 초기값 세팅 

    var section1 = $('.section1');
    var $section1_left = $('[data-ui-animate="section1_leftbox"]');
    var $section1_right = $('[data-ui-animate="section1_right"]');
    var $section1_center_image = $('[data-ui-animate="section1_center_image"]');
    var $section1_center_product = $('[data-ui-animate="section1_center_product"]');
    var $section1_center_explanation = $('[data-ui-animate="section1_center_explanation"]');
    var $section1_center_price = $('[data-ui-animate="section1_center_price"]');
    
    function section1_setAnimation() {
        TweenMax.set($section1_left, {
            y: 400,
            opacity: 0
        });
        
        TweenMax.set($section1_right, {
            y: 80,
            opacity: 0
        });
        
        TweenMax.set($section1_center_image, {
            y: 190,
            opacity: 0,
            onComplete: function() {
                TweenMax.set($section1_center_product, {
                    y: 450,
                    opacity: 1
                });
                
                TweenMax.set($section1_center_explanation, {
                    y: 800,
                    opacity: 0
                });
                
                TweenMax.set($section1_center_price, {
                    y: 800,
                    opacity: 0
                });
            }
        });
    }
    
    var section2 = $('.section2');
    var $section2_left = $('[data-ui-animate="section2_leftbox"]');
    var $section2_right = $('[data-ui-animate="section2_right"]');
    var $section2_center_image = $('[data-ui-animate="section2_center_image"]');
    var $section2_center_product = $('[data-ui-animate="section2_center_product"]');
    var $section2_center_explanation = $('[data-ui-animate="section2_center_explanation"]');
    var $section2_center_price = $('[data-ui-animate="section2_center_price"]');
    
    function section2_setAnimation() {
        
        TweenMax.set($section2_left, {
            y: 250,
            x: 0,
            opacity: 0
        });

        TweenMax.set($section2_right, {
            y: 400,
            opacity: 0
        });

        TweenMax.set($section2_center_image, {
            y: 400,
            opacity: 0
        });

        TweenMax.set($section2_center_product, {
            y: 400,
            opacity: 1
        });

        TweenMax.set($section2_center_explanation, {
            y: 600,
            opacity: 0
        });

        TweenMax.set($section2_center_price, {
            y: 600,
            opacity: 0
        });

    }

    var section3 = $('.section3');
    var $section3_left = $('[data-ui-animate="section3_leftbox"]');
    var $section3_right = $('[data-ui-animate="section3_right"]');
    var $section3_center_image = $('[data-ui-animate="section3_center_image"]');
    var $section3_center_product = $('[data-ui-animate="section3_center_product"]');
    var $section3_center_explanation = $('[data-ui-animate="section3_center_explanation"]');
    var $section3_center_price = $('[data-ui-animate="section3_center_price"]');

    function section3_setAnimation() {

        TweenMax.set($section3_left, {
            y: 500,
            opacity: 0
        });
        
        TweenMax.set($section3_right, {
            y: 200,
            opacity: 0
        });
        
        TweenMax.set($section3_center_image, {
            y: 130,
            opacity: 0
        });

        TweenMax.set($section3_center_product, {
            y: 500,
            opacity: 1
        });

        TweenMax.set($section3_center_explanation, {
            y: 700,
            opacity: 0
        });

        TweenMax.set($section3_center_price, {
            y: 700,
            opacity: 0
        });
    }
 
    var section4 = $('.section4');
    var $section4_left = $('[data-ui-animate="section4_leftbox"]');
    var $section4_right = $('[data-ui-animate="section4_right"]');
    var $section4_center_image = $('[data-ui-animate="section4_center_image"]');
    var $section4_center_product = $('[data-ui-animate="section4_center_product"]');
    var $section4_center_explanation = $('[data-ui-animate="section4_center_explanation"]');
    var $section4_center_price = $('[data-ui-animate="section4_center_price"]');

    function section4_setAnimation(){

        TweenMax.set($section4_left, {
            y: 300,
            opacity: 0
        });
        
        TweenMax.set($section4_right, {
            y: 800,
            opacity: 0
        });
        
        TweenMax.set($section4_center_image, {
            y: 400,
            opacity: 0
        });

        TweenMax.set($section4_center_product, {
            y: 500,
            opacity: 1
        });

        TweenMax.set($section4_center_explanation, {
            y: 700,
            opacity: 0
        });

        TweenMax.set($section4_center_price, {
            y: 700,
            opacity: 0
        });
    }


    var $about_img = $('[data-ui-animate="img_area"]');
    var $about_text = $('[data-ui-animate="text_area"]');
    
    function about_set_animation(){
        
        TweenMax.set($about_img, {
            x: -300,
            y: 100 ,
            opacity: 0
        });
        
        TweenMax.set($about_text, {
            x: 300,
            y: 100 ,
            opacity: 0
        });
    }

    // 스크롤이 해당 영역에 닿았을시 발생되는 공통 애니메이션 
    var $inner_padding = $('.inner_padding');

    function common_Animation(index) {
        var $ui_motion = $inner_padding.eq(index).find('[data-ui-animate]');
        TweenMax.to($ui_motion, 1, {
            opacity: 1
        });
        TweenMax.to($ui_motion, 1.5, {
            x: 0,
            y: 0,
            ease: Circ.easeOut
        });
    }

    function common_Anima(index) {
        var $section1_left = $('[data-ui-animate="section1_leftbox"]');
        var $section1_right = $('[data-ui-animate="section1_right"]');
        var $section2_left = $('[data-ui-animate="section2_leftbox"]');
        var $section2_right = $('[data-ui-animate="section2_right"]');
        var $section3_left = $('[data-ui-animate="section3_leftbox"]');
        var $section3_right = $('[data-ui-animate="section3_right"]');
        var $section4_left = $('[data-ui-animate="section4_leftbox"]');
        var $section4_right = $('[data-ui-animate="section4_right"]');
        
        TweenMax.to($section1_left, 0.8, {
            x: 40,
            y: -160,
            ease: Power1.easeOut
        });
        TweenMax.to($section1_right, 0.8, {
            x: -40,
            y: 70, 
            ease: Power1.easeOut
        });
        TweenMax.to($section2_left, 0.5, {
            x: 15,
            y: 200,
            ease: Power1.easeOut
        });
        TweenMax.to($section2_right, 0.5, {
            x: -50,
            y: -80,
            ease: Power1.easeOut
        });
        TweenMax.to($section3_left, 0.5, {
            x: 20,
            y: 100,
            ease: Power1.easeOut
        });
        TweenMax.to($section3_right, 0.5, {
            x: -30,
            y: -130,
            ease: Power1.easeOut
        });
        TweenMax.to($section4_left, 0.5, {
            x: 0,
            y: 100,
            ease: Power1.easeOut
        });
        TweenMax.to($section4_right, 0.5, {
            x: -10,
            y: -150,
            ease: Power1.easeOut
        });
    }
   
    function init() {
        section1_setAnimation();
        section2_setAnimation();
        section3_setAnimation();
        section4_setAnimation();
        about_set_animation();

       // common_Animation();
        $inner_padding.each(function(){
            // $(this).attr('속성 (id, class, src)', 넣고자하는 값);
            $(this).attr('data-offset', $(this).offset().top - $(window).height() /2);
        });
    }

    $(window).on('load', init);
    
    var isScrolling;
    var lastScroll;

    $(window).on('load scroll', function() {
        var scrollTop = $(window).scrollTop();
        var scrollDiff =  scrollTop - lastScroll;
        if(scrollTop >= $inner_padding.eq(0).data('offset') && scrollTop < $inner_padding.eq(1).data('offset')){
            common_Animation(0);

            if (scrollDiff > 0) {
                common_Anima(0);
            }
            else{
                common_Animation(0);
            }
        } else if (scrollTop >= $inner_padding.eq(1).data('offset') && scrollTop < $inner_padding.eq(2).data('offset')) { 
            common_Animation(1);

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(1);
                
            }
            
        } else if (scrollTop >= $inner_padding.eq(2).data('offset') && scrollTop < $inner_padding.eq(3).data('offset')) {
            common_Animation(2);
            
            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(2);  
            }
        } else if (scrollTop >= $inner_padding.eq(3).data('offset')) {
            common_Animation(3);

            if (scrollDiff < 0) {
                common_Anima(0);
            }
            else{
                common_Animation(3);
            }  
        }

        clearTimeout(isScrolling);
        isScrolling = setTimeout(function(){
            lastScroll = $(window).scrollTop();
        },300);

    });
}());
// sidemenu open close 
/*
    <nav>
        <a href="#" title="Product" data-ui="navi_underline" data-ui-side="sideMenu_open"  class="fontbold">
            Product ∨ 
            <span class="underline"></span>
        </a>
    </nav>
    <div class="side_menu" data-ui-side="side_menu">
        <a class="side_backBtn" data-ui-side="sideMenu_close">＜ Back</a>
    </div>
*/

(function(){

    var $sideMenu_open = $('[data-ui-side="sideMenu_open"]');
    var $side_menu = $('[data-ui-side="side_menu"]');
    var $side_menu_close = $('[data-ui-side="sideMenu_close"]');

    // product 클릭시
    function productClick_effect() {
        TweenMax.to($side_menu, 0.4, {left:0});
    }

    $sideMenu_open.on('click', productClick_effect);

    // back 클릭시
    function backClick_effect() {
        TweenMax.to($side_menu, 0.4, {left:"-800px"});
    }
    
    $side_menu_close.on('click', backClick_effect);
}());
(function(){
    var $list_box = $('[data-ui="list_box"]');
    var $btn = $list_box.find('.btns');
    var animating = false;
    var animation_speed = 500;

    function next_slide_effect(e){
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider"]');
        var $inner_frame = $parents.find('[data-ui="inner_frame"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out_frame"]').width();
        var $indcator = $parents.find('.slide_indicator_btn');

        $inner_frame.animate({
            left: -$out_width
        }, animation_speed, 'swing', function () {
            $scene.eq(0).insertAfter($scene.eq(-1));
            $inner_frame.css('left', 0);
            animating = false;
        });
    }

    function prev_slide_effect(e){
        var $target = $(e.target);
        var $parents = $target.parents('[data-ui="slider"]');
        var $inner_frame = $parents.find('[data-ui="inner_frame"]');
        var $scene = $inner_frame.find('.scene');
        var $out_width = $parents.find('[data-ui="out_frame"]').width();

        $inner_frame.css('left', -$out_width);
        $scene.eq(-1).insertBefore($scene.eq(0));
        $inner_frame.animate({
            left: 0
        }, animation_speed, 'swing', function(){
            animating = false;
        });
    }

    function slide_effect(e) {
      var $target = $(e.target);
      if ($target.hasClass('slide_next_btn')) {
        if (!animating) {
            animating = true;
            next_slide_effect(e);
        }  
      }
      else if ($target.hasClass('slide_prev_btn')) {
          if (!animating) {
            animating = true;
            prev_slide_effect(e);
          }
      }
    }

    $btn.on('click', slide_effect);
}());
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
        // console.log(tab_id);
        TweenMax.to($sideMenu_detailAera, 0.3, {
            width:'110%',
            opacity:1
        });
        
        TweenMax.to($('[data-pannel-id]'), 0.3, {
            opacity:0
        });
        
        data_pannel = $('[data-pannel-id="'+ tab_id +'"]');
        // console.log(data_pannel);
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
// tab 기능 , 애니메이션 fade In Out 사용

(function () {
    var $data_tab_id = $('[data-id]');
    var $tab_wrap = $('[data-ui="tab_button_wrap"]');
    var $tab_btn = $tab_wrap.find('a');
    var speed = 200;

    function tab_button(e) {
        var $target = $(e.target);
        var tab_id;
        // var tab_content;
        var $tab_con = $('.btn_content').find('li');

        tab_id = $target.attr('data-id');
        // console.log(tab_id);
        // tab select
        $tab_btn.removeClass('select_a');
        $tab_btn.eq(tab_id).addClass('select_a');

        // tab_content = $('[data-content-id="' + tab_id + '"]');
        // console.log(tab_content);

        if (tab_id == 0) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(0).fadeIn();
            return false;
        } else if (tab_id == 1) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(1).fadeIn();
            return false;
        } else if (tab_id == 2) {
            // $tab_con.eq(1).show();
            $tab_con.fadeOut();
            $tab_con.eq(2).fadeIn();
            return false;
        }
    }

    $tab_btn.on('click', tab_button);
}());
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

//# sourceMappingURL=client.js.map
