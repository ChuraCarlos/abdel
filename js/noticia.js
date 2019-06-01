$(document).ready(function(){
	mostrando();
});
function mostrando(){
	$.ajax({
		type:"POST",
		url:"php/registro.php",
		dataType:"json",
		data:"opcion=mostrando_noticias",
		success:function(datos){
			var cantidad = datos.length;
			
			var dell = 0;
			var numero = 0;
			if(cantidad<=4){
				ht = "<div class='container-fluid'>";
				ht += "<div class='row lineas'>";
				for(var i = 0; i < cantidad ;i++){
					var quitar = datos[i][2].split("."); 
				ht +="<div class='col-md-3 presentacion wow fadeInDown' data-wow-duration='2s' data-wow-delay='1s'><img class='dise' src='img/noticia/"+datos[i][4]+"'>";
				ht += "<h2>"+datos[i][1]+"</h2>";
				ht += "<p>"+quitar[0]+"</p>";
				ht += "<p><a href='#' class='forma-boton'><span class='glyphicon glyphicon-share-alt'></span> mas informacion</a></p>";
				ht += "</div>";
				}
				ht += "</div>";
				ht += "</div>";

			}else{
				var divido = Math.ceil(cantidad/4);
				ht = "";
				for(var i = 0; i < divido ;i++){
					ht += "<div class='container-fluid'>";
					ht += "<div class='row lineas'>";
					for(var j = dell; j < cantidad ;j++){
						var quitar = datos[i][2].split("."); 
						if(numero<4){
							ht +="<div class='col-md-3 presentacion wow fadeInDown' data-wow-duration='2s' data-wow-delay='1s'><img class='dise' src='img/noticia/"+datos[j][4]+"'>";
							ht += "<h2>"+datos[j][1]+"</h2>";
							ht += "<p>"+quitar[0]+"</p>";
							ht += "<p><a href='php/imprimir.php?codigo="+datos[j][0]+"' class='forma-boton'><span class='glyphicon glyphicon-share-alt'></span> mas informacion</a></p>";
							ht += "</div>";
							dell = j;
							numero++;
						}else{
							numero = 0;
							dell++;
							break;
						}

					}
					ht += "</div>";
					ht += "</div>";
					ht += "<hr/>";
				}
			}
			
			$(".deposito").html(ht);

		}
	});
}