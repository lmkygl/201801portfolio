//fadeIn, fadeOut 효과
/* 
 효과 

 페이지 로드시 천천히 나타나면서 객체가 아래에서 위로 객체가 붙음
 오른쪽객체가 제일 먼저 나타나고 왼쪽 센터는 같이 나타나는데, 왼쪽보다 센터 박스가 늦게 나타남.
 스크롤시 오른쪽 왼쪽 객체가 옆으로붙으면서 올라감

 객체가 모두 뜨고나면, section의 중간보다 끝지점에서 상품이름과 가격나옴

*/

(function(){

    var $container = $('.container');

    function fadeIn_effect(){
        //$container.children().addClass('fadeInUp');
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

