$(document).ready(function (){
	mostrar_docente();
});
function mostrar_docente(){
	$.ajax({
		type:"POST",
		dataType:"json",
		url:"php/registro.php",
		data:"opcion=mostrando_docentes",		
		success:function (datos){
			var cantidad = datos.length;
			console.log(cantidad);
			var dell = 0;
			var numero = 0;
			if(cantidad<=4){
				html  = "<div class='filas'>";
				
				for(var i = 0 ; i < cantidad; i++){
					html += "<div class='modelo wow fadeInDown' data-wow-duration='2s' data-wow-delay='1s'>";

					html += "<div class='perfil'>";
					html += "<img src='img/docente/"+datos[i][7]+"'/>";
					html += "</div>";
					html += "<div class='parrafo'>";
					html += "<p><span class='glyphicon glyphicon-ok'></span> <span class='esquina'>nombre: </span>"+datos[i][3]+"</p>";
					html += "<p><span class='glyphicon glyphicon-ok'></span> <span class='esquina'>apellido: </span>"+datos[i][4]+"</p>";
					html += "<p><span class='glyphicon glyphicon-envelope'></span> <span class='esquina'>correo electronico: </span>"+datos[i][6]+"</p>";
					html += "</div>";
					
					html += "</div>";
				}
				html += "</div>";

			}else{
				var divido = Math.ceil(cantidad/4);
				html="";
				for(var x = 0 ; x < divido ;x++){
					html  += "<section class='filas'>";
					for(var i = dell ; i < cantidad; i++){
						if(numero<4){
							html += "<div class='modelo wow fadeInDown' data-wow-duration='2s' data-wow-delay='1s'>";
							html += "<div class='perfil'>";
							html += "<img src='img/docente/"+datos[i][7]+"'/>";
							html += "</div>";
							html += "<div class='parrafo'>";
							html += "<p><span class='glyphicon glyphicon-ok'></span> <span class='esquina'>nombre: </span>"+datos[i][3]+"</p>";
							html += "<p><span class='glyphicon glyphicon-ok'></span> <span class='esquina'>apellido: </span>"+datos[i][4]+"</p>";
							html += "<p><span class='glyphicon glyphicon-envelope'></span> <span class='esquina'>correo electronico: </span>"+datos[i][6]+"</p>";
							html += "</div>";
							html += "</div>";
							dell = i;
							numero++;
						}else{
							numero = 0;
							dell++;
							break;

						}
						
							
					}
					html += "</section>";
				}
								
			}
			
			$(".fondo_docente").html(html);
			
		}
	});
}