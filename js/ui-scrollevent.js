(function(){
    // var $dom = $('.inner_padding');

    // $dom.each(function(){
    //     // console.log($(this).offset().top);
    //     console.log($(this)[0].scrollHeight);
    // });



    // function handleScroll(){
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    // }

    // $(window).on('scroll',handleScroll);

    // 트윈맥스로 애니메이트 초기값 설정 
    var $ui_motion = $('[data-ui-animate]');

    var $section1_left = $('[data-ui-animate="section1_leftbox"]');
    var $section1_right = $('[data-ui-animate="section1_right"]');
    
    var $section2_left = $('[data-ui-animate="section2_leftbox"]');
    var $section2_right = $('[data-ui-animate="section2_right"]');

    var $section3_left = $('[data-ui-animate="section3_leftbox"]');
    var $section3_right = $('[data-ui-animate="section3_right"]');

    var $section4_left = $('[data-ui-animate="section4_leftbox"]');
    var $section4_right = $('[data-ui-animate="section4_right"]');
    
    var $center_image = $('[data-ui-animate="center_image"]');
    var $center_product  = $('[data-ui-animate="center_product"]');
    var $center_explanation = $('[data-ui-animate="center_explanation"]');
    var $center_price = $('[data-ui-animate="center_price"]');
    
    
    function set_animation(){

        TweenMax.set($section1_left, {
            y: 250,
            opacity: 0
        });
        TweenMax.set($section1_right, {
            y: 80,
            opacity: 0
        });

        TweenMax.set($section2_left, {
            y: 250,
            opacity: 0
        });
        TweenMax.set($section2_right, {
            y: 400,
            opacity: 0
        });

        TweenMax.set($section3_left, {
            y: 500,
            opacity: 0
        });
        TweenMax.set($section3_right, {
            y: 280,
            opacity: 0
        });

        TweenMax.set($section4_left, {
            y: 300,
            opacity: 0
        });
        TweenMax.set($section4_right, {
            y: 700,
            opacity: 0
        });


        TweenMax.set($center_image, {
            y: 190,
            opacity: 0
        });
        TweenMax.set($center_product, {
            y: 450,
            opacity: 1
        });
        TweenMax.set($center_explanation, {
            y: 800,
            opacity: 0
        });
        TweenMax.set($center_price, {
            y: 800,
            opacity: 0
        });
    
    }

    function setMotion() {
        set_animation();
        
        TweenMax.to($ui_motion, 1 , {
            x: 0,
            y: 0,
            opacity: 1,
        }); 
    
        console.log(11);
    }
      
    
    
    $(document).on('click', setMotion);






}());