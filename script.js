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

		var textDugmeta = $(this).val();
		if(textDugmeta == "Show") {
			$(this).val("Hide");
		} else {
			$(this).val("Show");
		}

//ne		//$(".clickme").click(function(){
//ra		//	if (.html("Show")) {
//di		//		$(".clickme").html("Hide")
		//	};
		//});
	});

	// $(".lista").click(function() {
	// 	$(this).css({color:"red"});
	// });	

// DOMACI naprviti funkciju toggle koja sluizi i za druge stvari osim hide/show. Hint: treba koristiti if varijablu,
// npr if color blue, changecolor red, if red, changecolor blue. Upotrebiti ga u listi da kad se opet klikne na ime,
// da se vrati boja

//re	// $(".lista").click(function() {
//se	// 	$(this).toggleClass("colorchange");
//nje	// });	

var trenutnoDete = null;
// moj nacin var prosloDete = -2;
const MAXIMALNO_DECE = $(".parent").children().length - 1;

console.log(MAXIMALNO_DECE);

$(".dugme").click(function(){
	/* if(trenutnoDete == null)
	{
		trenutnoDete = 0;
	} */
	$(".parent").find(".red").removeClass("red")
//                if(trenutnoDete == null) { } else { }
// moj nacin	prosloDete = (prosloDete == -2) ? prosloDete+1 : prosloDete+1;
	trenutnoDete = (trenutnoDete == null) ? 0 : trenutnoDete+1;
	trenutnoDete = (trenutnoDete > MAXIMALNO_DECE) ? 0 : trenutnoDete;
/* ili if(trenutnoDete > MAXIMALNO_DECE)
		{
			trenutnoDete = 0;
		} */
	var element = $(".parent").children()[trenutnoDete];
// moj nacin	var elementprosli = $(".parent").children()[prosloDete];
// 	console.log(element);
	$(element).addClass("red")
// moj nacin	$(elementprosli).removeClass("red")
});

// DOMACI na nasem sajtu napraviti da kada korisnik klikne na jedan proizvod on bude highlightovan a kada klikne
// na drugi prvi da se vrati na standardni prikaz a drugi kliknuti da bude highlightovan

});