(function(){

    var side_menu = $("[data-ui=side_menu]");
    var side_menu_link = $("[data-ui=side_menu] a");

    side_menu_link.mouseover(function() {
        $(this).children('span').addClass('test');
    })
    .mouseout(function() {
        $(this).children('span').removeClass('test');
       
    });

}());