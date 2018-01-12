$(document).ready(function(){

	$(window).bind("resize", function(){
		var winwid = $(window).width();
		$("h1").css("font-size", winwid * .04);

	}).trigger('resize');

	$(window).bind("resize", function(){
		var winwid = $(window).width();
		$("h3").css("font-size", winwid * .03);
	}).trigger('resize');

	$(window).bind("resize", function(){
		var winwid = $(window).width();
		$("input").css("width", (winwid * .65));
	}).trigger('resize');



});

var hasSearched = false;

var grabNouns = function(){

	document.getElementById("preface").innerHTML = "Here's what we came up with for you:";
	var sentence = document.getElementById("search").value;
	if(sentence == ""){
		alert("was empty");
	}
	else{ 
		var words = sentence.split(" ");
		var i = 0;
		var result = document.getElementById("res");
		if(hasSearched == true){
			result.innerHTML = "";
		}
		while (i < words.length){
			if(words[i] != ""){
				result.innerHTML = result.innerHTML + words[i] + ":<br>";
			}
			i++;
		}


		hasSearched = true;
	}
}