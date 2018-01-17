//fadeIn, fadeOut 효과


(function(){

    // 공통으로 딜레이 시간 적용되고, 마진값이 0 
    var $fadeIn_up_center = $('[data-ui-fade="fadeIn_up_center"]');
    var $fadeIn_up_name = $('[data-ui-fade="fadeIn_up_name"]');
    var $fadeIn_up_name_ex = $('[data-ui-fade="fadeIn_up_name_ex"]');
    var $fadeIn_up_price = $('[data-ui-fade="fadeIn_up_price"]');
    

    var $fadeIn_up_left = $('[data-ui-fade="fadeIn_up_left"]');
    var $fadeIn_up_right = $('[data-ui-fade="fadeIn_up_right"]');

    var $fadeIn_up_left2 = $('[data-ui-fade="fadeIn_up_left2"]');
    var $fadeIn_up_right2 = $('[data-ui-fade="fadeIn_up_right2"]');
    
    var $fadeIn_up_left3 = $('[data-ui-fade="fadeIn_up_left3"]');
    var $fadeIn_up_right3 = $('[data-ui-fade="fadeIn_up_right3"]');
    
    var $fadeIn_up_left4 = $('[data-ui-fade="fadeIn_up_left4"]');
    var $fadeIn_up_right4 = $('[data-ui-fade="fadeIn_up_right4"]');
   
    
    function fadeIn_effect(){

        TweenMax.to($fadeIn_up_left, 1,{css:{marginTop:'100px' , opacity:1}});
        TweenMax.to($fadeIn_up_right, 0.5,{css:{marginTop:0 , opacity:1}} );

        TweenMax.to($fadeIn_up_left2, 0.5,{css:{marginTop:'130px' , opacity:1}});
        TweenMax.to($fadeIn_up_right2,1,{css:{marginTop:'350px' , opacity:1}});

        TweenMax.to($fadeIn_up_left3,1,{css:{marginTop:'200px' , opacity:1}});
        TweenMax.to($fadeIn_up_right3,0.5,{css:{marginTop:'70px' , opacity:1}});

        TweenMax.to($fadeIn_up_left4,0.5,{css:{marginTop:'100px' , opacity:1}});
        TweenMax.to($fadeIn_up_right4,1,{css:{marginTop:'300px' , opacity:1}});

        TweenMax.to($fadeIn_up_center, 1.5,{css:{marginTop:0, opacity:1}});
        TweenMax.to($fadeIn_up_name, 2,{css:{marginTop:0, opacity:1}} );
        TweenMax.to($fadeIn_up_name_ex, 2.3, {css:{marginTop:0, opacity:1}});
        TweenMax.to($fadeIn_up_price, 2.3, {css:{marginTop:0, opacity:1}});

    }
    
    window.onload = fadeIn_effect();



    // 스크롤 이벤트
    $(window).scroll(function(){
        var $scrollTop = $(window).height();
        var $section1_offset = $('.section1').offset().top;
        var $section2_offset = $('.section2').offset().top;
        var $section3_offset = $('.section3').offset().top;
        var $section4_offset = $('.section4').offset().top;

        
        if ($section1_offset >= 974) {
            // console.log($section1_offset);
            TweenMax.to($fadeIn_up_left, 1,{left:'0'});
            TweenMax.to($fadeIn_up_right, 0.5,{right:0} );
        }


        if($section1_offset <= $scrollTop){
            TweenMax.to($fadeIn_up_left, 1,{css:{left:'60px' , opacity:1}});
            TweenMax.to($fadeIn_up_right, 0.5,{css:{right:'15px' , opacity:1}} );
        }

        if($section2_offset >= $scrollTop + $section1_offset){
            TweenMax.to($fadeIn_up_left2, 1,{css:{left:'50px' , opacity:1}});
            TweenMax.to($fadeIn_up_right2, 0.5,{css:{right:'40px' , opacity:1}} );
        }
        

        if($section3_offset <= $scrollTop  + $section1_offset+ $section2_offset ){
            TweenMax.to($fadeIn_up_left3, 1,{css:{left:'80px' , opacity:1}});
            TweenMax.to($fadeIn_up_right3, 0.5,{css:{right:'10px' , opacity:1}} );
        }
    
       
        if($section4_offset <= $scrollTop + $section1_offset+ $section2_offset + $section3_offset){
            TweenMax.to($fadeIn_up_left4, 1,{css:{left:'20px' , opacity:1}});
            TweenMax.to($fadeIn_up_right4, 0.5,{css:{right:'80px' , opacity:1}} );
        }
       
    
    });

    

}());
/*
jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

*/

