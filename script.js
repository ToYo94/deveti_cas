// ovo se uvek ispisuje na pocetku .js-a i govori mu da saceka da se glavni dokument kojim je vezan u 
//potpunosti ucita.

$(document).ready(function() {

	// alert("Pozdrav!");

	$(".changetext").click(function() {
		$(".changetext").html("WOOSH");
		$(".changetext").animate({opacity:0}, 2000, function(){
			$(".changetext").html("Hello");
			$(".changetext").animate({opacity:1}, 2000);
		});
	});

	$(".clickme").click(function() {
		$(".hide").toggle();
		$(".clickme").html("Show");
		//$(".clickme").click(function(){
		//	if (.html("Show")) {
		//		$(".clickme").html("Hide")
		//	};
		//});
	});

	// $(".colorchange").css({color:"red"});

	$(".lista").click(function() {
		$(this).toggleClass("colorchange");
	//	if ($(this)color:"red") {
	//		$(this).css({color:"black"});
	//	}
	});	

// DOMACI naprviti funkciju toggle koja sluizi i za druge stvari osim hide/show. Hint: treba koristiti if varijablu,
// npr if color blue, changecolor red, if red, changecolor blue. Upotrebiti ga u listi da kad se opet klikne na ime,
// da se vrati boja

});