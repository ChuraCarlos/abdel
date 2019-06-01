$(document).ready(function (){
	calendario();
	//mostrar_imagen();
});
function calendario(){
	calendario = ["enero","febreo","marzo","abril","mayo","junio","julio","agosto","septiempre","octubre","noviembre","diciembre"];
	var max_calendario = calendario.length;
	etiqueta ="<div class='row'>";
	etiqueta +="<div class='col-md-3'>"; 
	etiqueta += "<input type='text' class='form-control anual' placeholder='ingresar año ejemplo:2017'/>";
	etiqueta +="</div>";
	etiqueta +="<div class='col-md-3'>";
	etiqueta += "<select class='form-control meses'>"; 
	for(var i = 0 ; i < max_calendario ; i++){
		if(i<9){
			etiqueta += "<option value='0"+(i+1)+"'>"+calendario[i]+"</option>";
		}else{
			etiqueta += "<option value='"+(i+1)+"'>"+calendario[i]+"</option>";	
		}
		
	}
	etiqueta += "</select>";
	etiqueta +="</div>";
	etiqueta +="<div class='col-md-3'>";
	etiqueta += "<button class='form-control btn btn-info' onclick='mostrar_imagen()'>Buscar</button>";
	etiqueta +="</div>"; 
	etiqueta +="</div>";
	$(".contenedor-menu").html(etiqueta);
}
function mostrar_imagen(){

	var anual = $(".anual").val();
	var meses_texto = $(".meses>option:selected").text();
	var meses = $(".meses").val();
	datos  = "anual="+anual;
	datos += "&meses="+meses;
	datos += "&opcion=mostrar_imagen";

	$.ajax({
		type:"POST",
		dataType:"json",
		url:"php/registro.php",
		data:datos,
		success:function (datos){
			var cantidad = datos.length;
			
			var dell = 0;
			var numero = 0;
			if(cantidad<=4){
				html  = "<div class='foto-fecha'>";
				html += "<h2 class='sub-titulo'>"+meses_texto+"-"+anual+"</h2>";
				html += "<div class='row fila'>";
				for(var i = 0 ; i < cantidad; i++){
					html += "<div class='col-md-3 fila-foto'><img class='foto-interior' data-toggle='modal' data-target='#Modal' onclick='encajar("+'"img/fotos/'+datos[i][1]+'"'+");' src='img/fotos/"+datos[i][1]+"'></div>";
				}
				html += "</div>";
				html += "</div>";

			}else{
				var divido = Math.ceil(cantidad/4);
				html  = "<div class='foto-fecha'>";
				html += "<h2 class='sub-titulo'>"+meses_texto+"-"+anual+"</h2>";
				for(var x = 0 ; x < divido ;x++){
					html += "<div class='row fila'>";
					for(var i = dell ; i < cantidad; i++){
						if(numero<4){
							html += "<div class='col-md-3 fila-foto'><img class='foto-interior' data-toggle='modal' data-target='#Modal' onclick='encajar("+'"img/fotos/'+datos[i][1]+'"'+");' src='img/fotos/"+datos[i][1]+"'></div>";
							dell = i;
							numero++;
						}else{
							numero = 0;
							dell++;
							break;

						}
						
							
					}
					html += "</div>";
					html += "<hr/>";
				}
				html += "</div>";				
			}
			
			$(".foto-anual").html(html);
			
		}
	});
}
function encajar(imagenes){
	var linea = "<img style='width:100%;' src='"+imagenes+"'/>";
	$(".deposito").html(linea);
}