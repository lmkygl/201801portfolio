(function(){
    // var $dom = $('.inner_padding');

    // $dom.each(function(){
    //     console.log($(this).offset().top);
    //     console.log($(this)[0].scrollHeight);
    // });



    // function handleScroll(){
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    // }

    // $(window).on('scroll',handleScroll);

    
    // 트윈맥스로 애니메이트 초기값 설정 
    
    var $ui_motion = $('[data-ui-animate]');

    function setMotion() {
        //set_animation();
        
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
    var $section1_center_product  = $('[data-ui-animate="section1_center_product"]');
    var $section1_center_explanation = $('[data-ui-animate="section1_center_explanation"]');
    var $section1_center_price = $('[data-ui-animate="section1_center_price"]');


    function section1_setAnimate(){
        
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

    function section1_area(e){
        section1_setAnimate();
        setMotion();
    }

    var section2 = $('.section2');
    var $section2_left = $('[data-ui-animate="section2_leftbox"]');
    var $section2_right = $('[data-ui-animate="section2_right"]');
    var $section2_center_image = $('[data-ui-animate="section2_center_image"]');
    var $section2_center_product  = $('[data-ui-animate="section2_center_product"]');
    var $section2_center_explanation = $('[data-ui-animate="section2_center_explanation"]');
    var $section2_center_price = $('[data-ui-animate="section2_center_price"]');

   

    function section2_setAnimate(){
        
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
    function section2_area(e){
        section2_setAnimate();
        setMotion();
    }


    var section3 = $('.section3');
    var $section3_left = $('[data-ui-animate="section3_leftbox"]');
    var $section3_right = $('[data-ui-animate="section3_right"]');
    var $section3_center_image = $('[data-ui-animate="section3_center_image"]');
    var $section3_center_product  = $('[data-ui-animate="section3_center_product"]');
    var $section3_center_explanation = $('[data-ui-animate="section3_center_explanation"]');
    var $section3_center_price = $('[data-ui-animate="section3_center_price"]');

    function section3_setAnimate(){

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
    function section3_area(e){
        section3_setAnimate();
        setMotion();
    }
    
    var section4 = $('.section4');
    var $section4_left = $('[data-ui-animate="section4_leftbox"]');
    var $section4_right = $('[data-ui-animate="section4_right"]');
    var $section4_center_image = $('[data-ui-animate="section4_center_image"]');
    var $section4_center_product  = $('[data-ui-animate="section4_center_product"]');
    var $section4_center_explanation = $('[data-ui-animate="section4_center_explanation"]');
    var $section4_center_price = $('[data-ui-animate="section4_center_price"]');

    function section4_setAnimate(){

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
    function section4_area(e){
        section4_setAnimate();
        setMotion();
        console.log(111);
    }


    section1.on('click', section1_area);
    section2.on('click', section2_area);
    section3.on('click', section3_area);
    section4.on('click', section4_area);


}());