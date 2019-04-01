$(document).ready(function() {
var but = $(".t780__btn-wrapper");
var buttonhref = $(".trading");
var color = $(".color option:selected").val();
var tel = $(".tel").val();
buttonhref.mouseover(function(){
  buttonhref.attr("href", "https://order.privator.club/aquarius.php?color="+ color +"&tel=" + tel);
});
});
