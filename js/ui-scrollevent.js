(function(){
    var $dom = $('.inner_padding');

    $dom.each(function(){
        console.log($(this)); // 객체
        console.log($(this).offset().top); // 0에서 객체와 스크롤사이 
        console.log($(this)[0].scrollHeight); // 객체의 높이
        console.log($(this).height());
    });



    // function handleScroll(){
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    // }

    // $(window).on('scroll',handleScroll);

    
    // 트윈맥스로 애니메이트 초기값 설정 
    
    var $ui_motion = $('[data-ui-animate]');
    
    function common_Animation() {
        TweenMax.to($ui_motion, 1.5 , {
            opacity: 1,
        });
        TweenMax.to($ui_motion, 2 , {
            x: 0,
            y: 0,
        });
    }
    
    var section1 = $('.section1');
    var $section1_left = $('[data-ui-animate="section1_leftbox"]');
    var $section1_right = $('[data-ui-animate="section1_right"]');
    var $section1_center_image = $('[data-ui-animate="section1_center_image"]');
    var $section1_center_product = $('[data-ui-animate="section1_center_product"]');
    var $section1_center_explanation = $('[data-ui-animate="section1_center_explanation"]');
    var $section1_center_price = $('[data-ui-animate="section1_center_price"]');
    
    function section1_setAnimation(){
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

     function section1_playAnimation(e){
        section1_setAnimation();
        common_Animation();
    }
    
    var section2 = $('.section2');
    var $section2_left = $('[data-ui-animate="section2_leftbox"]');
    var $section2_right = $('[data-ui-animate="section2_right"]');
    var $section2_center_image = $('[data-ui-animate="section2_center_image"]');
    var $section2_center_product = $('[data-ui-animate="section2_center_product"]');
    var $section2_center_explanation = $('[data-ui-animate="section2_center_explanation"]');
    var $section2_center_price = $('[data-ui-animate="section2_center_price"]');
    
    function section2_setAnimation(){
        
        TweenMax.set($section2_left, {
            y: 250,
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

    function section2_playAnimation(e){
        section2_setAnimation();
        common_Animation();
    }


    var section3 = $('.section3');
    var $section3_left = $('[data-ui-animate="section3_leftbox"]');
    var $section3_right = $('[data-ui-animate="section3_right"]');
    var $section3_center_image = $('[data-ui-animate="section3_center_image"]');
    var $section3_center_product = $('[data-ui-animate="section3_center_product"]');
    var $section3_center_explanation = $('[data-ui-animate="section3_center_explanation"]');
    var $section3_center_price = $('[data-ui-animate="section3_center_price"]');

    function section3_setAnimation(){

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

    function section3_playAnimation(e){
        section3_setAnimation();
        common_Animation();
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

    function section4_playAnimation(e){
        section4_setAnimation();
        common_Animation();
    }

    // section1.on('click', section1_playAnimation);
    // section2.on('click', section2_playAnimation);
    // section3.on('click', section3_playAnimation);
    // section4.on('click', section4_playAnimation);
}());