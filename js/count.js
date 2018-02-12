(function () {
    var counter = $('[data-ui="counter"]');
    var btn = counter.find('button');
    var min = 0;
    var max = counter.data('max');
    var current = parseInt(counter.find('.current').val());
    var input = counter.find('input');

    function counter(val) {

    }

    function handler(e) {
        var target = $(e.target);

        if (target.hasClass('plus')) {
            input.val(current += 1);

            if (max < current) {
                input.val(current = min);
            }

        } else {
            input.val(current -= 1);

            if (0 > current) {
                input.val(current = max);
            }
        }
    }

    btn.on('click', handler);
}());