(function(){
    var button = $('.list_Box').find('button');
    var product = $('[data-ui="sponsorship_product_area"]');
    var toggled = false;

    function clickhandle(e){
        var target = $(e.target);
        var list = $(e.target).parents('.list_Box');
        var $btn = $(e.target).parents('[data-ui="sponsorship_show"]').siblings('ul');
        

        if (toggled) {
            toggled = false;
            console.log(toggled);
            list.animate({"height":"550px"});
            TweenMax.to($btn, 0.3, {
                opacity:1,
            });
            target.text("▲");
            return;
        }
        else if(!toggled){
            toggled = true;
            console.log(toggled);
            list.animate({"height":"300px"});
            TweenMax.to($btn, 0.3, {
                opacity:0,
            });
            target.text("▼");
            return;
        }

    }
    
    button.on('click', clickhandle);
}());