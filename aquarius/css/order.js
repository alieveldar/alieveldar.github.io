$(document).ready(function() {
var but = $(".t780__btn-wrapper");
var buttonhref = $(".t780__btn t-btn");
var color = $(".t-product__option-select t-descr t-descr_xxs js-product-option-variants").val();
var tel = $(".tel").val();
but.mouseover(function(){
  buttonhref.attr("href", "https://order.privator.club/aquarius.php?color="+ color +"&tel=" + tel);
});
});
