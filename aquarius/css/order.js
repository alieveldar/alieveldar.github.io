$(document).ready(function() {
var but = $(".t780__btn-wrapper");
var buttonhref = $(".trading");
buttonhref.mouseover(function(){
  var color = $(".color option:selected").val();
var tel = $(".tel").val();
  buttonhref.attr("href", "https://order.privator.club/aquarius.php?color="+ color +"&tel=" + tel);
});
var hlaw =$(".law152");
var tlaw=$(".law152text");
hlaw.on("click", function(){
	tlaw.show();
}); 
});
