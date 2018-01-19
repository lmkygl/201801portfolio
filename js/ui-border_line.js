(function(){
    var $borderline = $('[data-ui-border="borderline"]');

    function borderline(e){
        $target = $(e.target);
        console.log($target);
    }

    $borderline.on('mouseenter mouseleave',borderline);
}());