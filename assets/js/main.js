$(document).ready(function(){
	$("p").click(function(){
		console.log("este es el this sin $ : " + this); //devuelve el elemento
		console.log("este es el this con $ : " + $(this)); //devuelve un arreglo con el elemento

		$(this).hide(); //esconder
	});

	$("a.show").click(function(){
		$("p").show(); //mostrar
	});

	$("h1").dblclick(function(event) { //doble click
		alert("Hicieron doble click");
	});

	$("p").mouseenter(function(event) {
		$(this).css("background-color", "#940021");
	});

	$("p").mouseleave(function(event) {
		$(this).css("background-color", "#50878b");
	});

	$("#myName").keydown(function(){
		$(this).css("background-color", "#bcabab");
	});

	$("#myName").keyup(function(){
		$(this).css("background-color", "pink");
	});

	$("#myName").keypress(function(){
		$(this).css("background-color", "green");
	});

	$("#myName").change(function(event) {
		var valorActual = $(this).val();
		var nuevoValor = lowerLetters(valorActual);

		$(this).val(nuevoValor);
		//$(this).val(lowerLetters($(this).val()));
	});

	$("h1").mouseenter(function(event) {
		$(this).toggleClass("clase");
	});

	$("a.mostrar").click(function(event) {
		$("h1").toggle(400); //milisegundos
	});

	$("a.fade").click(function(event) {
		$("h2").fadeOut("slow");
	});
	
	$("a.fade").click(function(event) {
		$("h2").fadeToggle("slow");
	});
});

function lowerLetters(value){
	/*this function gets a value and the same value in lowercase and whitout number and special characters*/
	var ret = value.toLowerCase();
	ret.replace(/[0-9]/g, '');
	return ret
}

/*la única forma de animar el display es con javascript, no se puede animar con css*/