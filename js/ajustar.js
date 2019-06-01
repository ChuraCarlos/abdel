$(document).ready(function(){

	var fondos = $(".fondo").length;
	// for(var i = 0 ; i < fondos; i++){
	// 	$(".fondo").eq(i).css({"height":650});
	// }
	img_x = $(window).width();
	img_y = $(window).height();
	$(".fondo").css({"height":1000});
	valor = fondos;
	

	iniciar();
	window.onresize = function(){
	do_x = $(window).width();
	do_y = $(window).height();

	cd_x = $(".cuadro").width()/2;
	cd_y = $(".cuadro").height()/2;

	wix = (do_x / 2)-cd_x;
	hey = (do_y / 2)-cd_y;

	tx = wix+"px";
	ty = hey+"px";

	/*$(".fondo").css({
		"width":do_x,
		"height":do_y
	});	*/

	$(".cuadro").css({
		"left":tx,
		"top":ty
	});

	}

	window.onscroll = function(){

		
		var x = $(document);
		var x_o = x.scrollTop();

		//console.log(x_o);

		if(x_o >= 952){
			$("#lider").css({"background-color":"#323232"});
		}else{
			if(x_o <= 952){
				$("#lider").css({"background-color":"rgba(0,0,0,0)"});
			}
		}
		
	}

	setInterval(recorrer,3000);
});
function iniciar(){
	do_x = $(window).width();
	do_y = $(window).height();

	cd_x = $(".cuadro").width()/2;
	cd_y = $(".cuadro").height()/2;

	wix = (do_x / 2)-cd_x;
	hey = (do_y / 2)-cd_y;

	tx = wix+"px";
	ty = hey+"px";

	/*$(".fondo").css({
		"width":do_x,
		"height":do_y
	});	*/

	$(".cuadro").css({
		"left":tx,
		"top":ty
	});

	var _ocultos = $(".ocultos>p").length;

	for(var i = 0 ; i<_ocultos; i++){
		$(".ocultos>p").eq(i).hide();
	}

	$(".ocultos>p").eq(0).show();

}
function mostrando(exe){
	var _ocultos = $(".ocultos>p").length;

	for(var i = 0 ; i<_ocultos; i++){
		$(".ocultos>p").eq(i).hide();
	}
	
	$("."+exe).show();
}
function moverse(){
	var x = $(document);
	var x_o = x.scrollTop(0);
}

function recorrer(){
	
	if( valor == 0 ){
		// || punto ==3
		$(".fondo").css({"opacity":1});
		valor = $(".fondo").length;
	}
	else{
		
		$(".fondo").eq(valor).css({"opacity":0});
		valor--;
	}
}