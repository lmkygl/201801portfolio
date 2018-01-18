(function(){
    var $dom = $('.inner_padding');

    $dom.each(function(){
        // console.log($(this).offset().top);
        console.log($(this)[0].scrollHeight);
    });

    

    function handleScroll(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
    }

    $(window).on('scroll',handleScroll);
             
}());