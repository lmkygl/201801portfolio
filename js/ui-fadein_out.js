//fadeIn, fadeOut 효과


(function(){

    var opacity = $('[data-ui-fade]');
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

        // TweenMax.to(opacity, 0.5,{css:{marginTop:0, opacity:1}});


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

