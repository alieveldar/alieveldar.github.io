$(document).ready(function() {
    var discount = $("#discountval");
    var price = $("#price");
    var summ = $("#summ");
    var discountp = $("#discount");
    pricenum = price.text().split("Цена: ");
    if ((Number(discount.text()) < 100 && (Number(discount.text())) > 0)) {
        var temp = (pricenum[1] - (pricenum[1] * (Number(discount.text()) / 100)));
        summ.text(temp + " руб.");
        price.css('textDecoration', 'line-through');
    } else {
        discountp.hide();
        summ.hide();
    }

    var buttond = $(".buttond");
    buttond.on("click", function() {
        alert("OK");
        var bar = $("#orderBar");
        var progress = $("#orderProgress");
        progress.show();
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 101) {
                clearInterval(id);
            } else {
                width+=10;
                bar.css('width', width);
            }
        }


    });

});