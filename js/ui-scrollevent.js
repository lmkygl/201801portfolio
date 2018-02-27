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