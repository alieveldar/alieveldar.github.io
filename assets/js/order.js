function(){
$( document ).ready(function() {
    var discount = $("#discountval");
    var price = $("#price");
    var summ = $("#summ");
    var discountp = $("#discount");
    if((Number(discount.text()) < 100 && (Number(discount.text())) > 0)) {
    	summ.text(Number(price.text()) * (Number(discount.text()) / 100))
    }
    else {
    	discountp.hide();
    	summ.hide();
    }

});
}