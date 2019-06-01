$(document).ready(function(){
	opacidad();
});
function opacidad(datos,cubo){
	if(datos==undefined){
		$(".cuadros").hide();

	}else{
		$(".page-header").html(cubo);
		$(".cuadros").hide();
		$(".cuadros").eq(datos).show();
		$(".fuente_fotos").html("");
	}
	
}
function efecto(index){
	$(".min-menu").eq(index).slideToggle(250);
}
function editar_docente(datos){
	
	var cap = datos.split("*"); 		
	$(".docente-id").val(cap[0]);
	$(".e-nombre").val(cap[1]);
	$(".e-apellido").val(cap[2]);
	$(".e-email").val(cap[3]);
	$(".e-dni").val(cap[4]);
	$(".e-file").val(cap[5]);
	imagenes = "<img src='img/docente/"+cap[5]+"' class='e-imagen' style='width:200px;height:200px;'/>";
	$(".anclaje").html(imagenes);
	
}
function enviar_data_docente(){
	var id = $(".docente-id").val();
	var nombre = $(".e-nombre").val();
	var apellido = $(".e-apellido").val();
	var email = $(".e-email").val();
	var dni = $(".e-dni").val();
	var foto = $(".e-foto").val();
	var file = $(".e-file").val();

	form = new FormData($(".formulario-edi")[0]);
	form.append("id",id);
	form.append("nombre",nombre);
	form.append("apellido",apellido);
	form.append("email",email);
	form.append("dni",dni);
	form.append("foto",foto);
	form.append("file",file);
	form.append("opcion","modificar_docente");

	if(confirm("quieres cambiar")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:form,
			contentType:false,
			processData:false,
			cache:false,
			success:function (){
				alert("cambio realizado");
				document.location.href="registro.html";
			}
		});
	}
}
function guardar_docente(){
	var nombre = $(".nombre").val();
	var apellido = $(".apellido").val();
	var email = $(".email").val();
	var dni = $(".dni").val();
	var foto = $(".foto").val();

	form = new FormData($(".formulario")[0]);
	form.append("nombre",nombre);
	form.append("apellido",apellido);
	form.append("email",email);
	form.append("dni",dni);
	form.append("foto",foto);
	form.append("opcion","registrando_docente");
	
	if(nombre != ""){
		if(apellido != ""){
			if(email != ""){
				if(dni != ""){
					if(foto != ""){
						$.ajax({
							type:"post",
							url:"php/registro.php",
							data:form,
							contentType:false,
							processData:false,
							cache:false,
							success:function (sms){
								alert("exito");
								$(".formulario")[0].reset();
								document.location.href="registro.html";
							}
						});
					}
					else{
					alert("debes rellenear todos los campos");
					}
				}
				else{
				alert("debes rellenear todos los campos");
				}
			}
			else{
			alert("debes rellenear todos los campos");
			}
		}
		else{
		alert("debes rellenear todos los campos");
		}
	}else{
		alert("debes rellenear todos los campos");
	}

}
function mostrando_docentes(){
	$(".cuadros").hide();
	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/registro.php",
		data:"opcion=mostrando_docentes",
		success:function (sms){
			//console.log(sms);
			cantidad = sms.length;
			html="<table class='table'>";
			html+="<tr>";
			html+="<td>Nro</td><td>Nombre</td><td>apellido</td><td>dni</td><td>e-mail</td><td>foto</td><td>editar</td><td>eliminar</td>";
			html+="</tr>";
			for(var i = 0 ; i < cantidad ; i++){
				var capturar = sms[i][2]+"*"+sms[i][3]+"*"+sms[i][4]+"*"+sms[i][5]+"*"+sms[i][6]+"*"+sms[i][7]; 
				html+="<tr>";
				html+="<td>"+(i+1)+"</td><td>"+sms[i][3]+"</td><td>"+sms[i][4]+"</td><td>"+sms[i][5]+"</td><td>"+sms[i][6]+"</td><td><img style='width:80px; height:80px;' src='img/docente/"+sms[i][7]+"'/></td><td><button class='btn btn-success' data-toggle='modal' data-target='#myModal' onclick='editar_docente("+'"'+capturar+'"'+");'>editar</button></td><td><button class='btn btn-danger' onclick='eliminar_docente("+'"'+sms[i][0]+'"'+',"'+sms[i][2]+'"'+',"'+sms[i][7]+'"'+");'>eliminar</button></td>";
				html+="</tr>";	
			}
			html+="</table>";

			$(".fuente_fotos").html(html);
		}
	});
}
function eliminar_docente(codes,names,quitar){
		
	enviar = "id_docente="+codes;
	enviar+= "&id_dato="+names;
	enviar+= "&file="+quitar;
	enviar+= "&opcion=borrar_docente";
	if(confirm("¿estas seguro?")){
		$.ajax({
			type:"POST",
			url:"php/registro.php",
			data:enviar,
			success:function(){
				alert("terminado");
				document.location.href="registro.html";
			}
		});
	}
}
function guardar_fechas(){
	fotos = $(".foto-imagen").val();
	fechas = $(".fecha_foto").val();

	forma = new FormData($("#formula")[0]);
	forma.append("fotos",fotos);
	forma.append("fecha_foto",fechas);
	forma.append("opcion","guardar_imagen");

	$.ajax({
		type:"post",
		url:"php/registro.php",
		data:forma,
		contentType:false,
		processData:false,
		cache:false,
		success:function (sms){
			alert("exito");
			document.location.href="registro.html";
		}
	});
}
function ft_fechas(){
	$(".cuadros").hide();
	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/registro.php",
		data:"opcion=mostrar_fechas",
		success:function (sms){
			//console.log(sms);
			cantidad = sms.length;
			html="<table class='table'>";
			html+="<tr>";
			html+="<td>Nro</td><td>imagen</td><td>fecha de la imagen</td><td>editar</td><td>eliminar</td>";
			html+="</tr>";
			for(var i = 0 ; i < cantidad ; i++){
				var capturar = sms[i][0]+"*"+sms[i][1]+"*"+sms[i][3]; 
				html+="<tr>";
				html+="<td>"+(i+1)+"</td><td><img style='width:80px; height:80px;' src='img/fotos/"+sms[i][1]+"'/></td><td>"+sms[i][3]+"</td><td><button class='btn btn-success' data-toggle='modal' data-target='#foto-Modal' onclick='editar_fechas("+'"'+capturar+'"'+")'>editar</button></td><td><button class='btn btn-danger' onclick='eliminando("+'"'+sms[i][0]+'"'+',"'+sms[i][1]+'"'+");'>eliminar</button></td>";
				html+="</tr>";	
			}
			html+="</table>";

			$(".fuente_fotos").html(html);
		}
	});
}
function editar_fechas(cadena){
	var separar = cadena.split("*");
	$(".foto-id").val(separar[0]);
	$(".e-fecha").val(separar[2]);
	$(".e-oculto").val(separar[1]);
	imagenes = "<img src='img/fotos/"+separar[1]+"' class='e-imagenes' style='width:200px;height:200px;'/>";
	$(".anclaje-foto").html(imagenes);

}
function enviando_fechas(){

	var id = $(".foto-id").val();
	var foto = $(".e-temporada").val();
	var fecha = $(".e-fecha").val();
	var oculto = $(".e-oculto").val();

	form = new FormData($(".for-edi")[0]);
	form.append("id",id);
	form.append("fecha",fecha);
	form.append("foto",foto);
	form.append("oculto",oculto);
	form.append("opcion","modificar_imagen");

	if(confirm("quieres cambiar")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:form,
			contentType:false,
			processData:false,
			cache:false,
			success:function (){
				alert("exito");
				document.location.href="registro.html";
			}
		});
	}
}
function eliminando(codes,names){

	enviar = "codigo="+codes;
	enviar+="&nombre="+names;
	enviar+="&opcion=eliminar_foto";

	if(confirm("¿desea eliminar?")){
	$.ajax({
		type:"post",
		url:"php/registro.php",
		data:enviar,
		success:function (datos){
			alert("eliminado");
			document.location.href="registro.html";
		}
	});

	}
}	
// modulo de noticia
function guardar_noticia(){
	var titulo = $(".titulo").val();
	var descripcion = $(".descripcion").val();
	var calendario = $(".calendario").val();
	var fotos = $(".ft").val();

	cuadro = new FormData($(".registro")[0]);
	cuadro.append("titulo",titulo);
	cuadro.append("descripcion",descripcion);
	cuadro.append("calendario",calendario);
	cuadro.append("fotos",fotos);
	cuadro.append("opcion","guardar_noticias");

	$.ajax({
		type:"post",
		url:"php/registro.php",
		data:cuadro,
		contentType:false,
		processData:false,
		cache:false,
		success:function(datos){
			alert("exito");
			document.location.href="registro.html";
		}
	});
}
function mostrando_noticia(){
	$(".cuadros").hide();
	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/registro.php",
		data:"opcion=mostrando_noticias",
		success:function(sms){
			cantidad = sms.length;
			html="<table class='table'>";
			html+="<tr>";
			html+="<td>Nro</td><td>titulo</td><td>texto</td><td>fecha</td><td>fotos</td><td>editar</td><td>eliminar</td>";
			html+="</tr>";
			for(var i = 0 ; i < cantidad ; i++){
				var capturar = sms[i][0]+"*"+sms[i][1]+"*"+sms[i][2]+"*"+sms[i][3]+"*"+sms[i][4];
				html+="<tr>";
				html+="<td>"+(i+1)+"</td><td>"+sms[i][1]+"</td><td>"+sms[i][2]+"</td><td>"+sms[i][3]+"</td><td><img style='width:80px; height:80px;' src='img/noticia/"+sms[i][4]+"'/></td><td><button data-toggle='modal' data-target='#noticia-Modal' class='btn btn-success' onclick='modificar_noticia("+'"'+capturar+'"'+");'>editar</button></td><td><button class='btn btn-danger' onclick='borrando_noticia("+'"'+sms[i][0]+'"'+',"'+sms[i][4]+'"'+");'>eliminar</button></td>";
				html+="</tr>";	
			}
			html+="</table>";

			$(".fuente_fotos").html(html);
		}
	});
}
function borrando_noticia(codes,names){
	enviar = "codigo="+codes;
	enviar+="&nombre="+names;
	enviar+="&opcion=eliminar_noticias";

	if(confirm("¿desea eliminar?")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:enviar,
			success:function (datos){
				alert("eliminado");
				document.location.href="registro.html";
			}
		});
	}
}
function modificar_noticia(paquete){
	var pq = paquete.split("*");
	$(".noticia-id").val(pq[0]);
	$(".e-titulo").val(pq[1]);
	$(".e-noticias").val(pq[2]);
	$(".e-fechas").val(pq[3]);
	$(".e-documento").val(pq[4]);
	imagenes = "<img src='img/noticia/"+pq[4]+"' class='e-imagenes' style='width:200px;height:200px;'/>";
	$(".anclaje-noticia").html(imagenes);
}
function enviar_noticia(){
	var id = $(".noticia-id").val();
	var titulo = $(".e-titulo").val();
	var noticia = $(".e-noticias").val();
	var fecha = $(".e-fechas").val();
	var foto = $(".e-evidencia").val();
	var files = $(".e-files").val();

	cuadro = new FormData($(".modificar")[0]);
	cuadro.append("id",id);
	cuadro.append("titulo",titulo);
	cuadro.append("noticia",noticia);
	cuadro.append("fecha",fecha);
	cuadro.append("foto",foto);
	cuadro.append("files",files);
	cuadro.append("opcion","modificar_noticias");


	if(confirm("estas seguro")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:cuadro,
			contentType:false,
			processData:false,
			cache:false,
			success:function(){
				alert("exito");
				document.location.href="registro.html";
			}
		});
	}
}
function guardar_actividad(){
	var actividad = $(".actividad").val();
	var hora = $(".hora").val();
	var responsable = $(".responsable").val();
	var fecha_actividad = $(".fecha_actividad").val();

	//cuadro = new FormData($("#formulario_actividad")[0]);
	cuadro="actividad="+actividad;
	cuadro+="&hora="+hora;
	cuadro+="&responsable="+responsable;
	cuadro+="&fecha_actividad="+fecha_actividad;
	cuadro+="&opcion=guardar_actividad";

	$.ajax({
		type:"post",
		url:"php/registro.php",
		data:cuadro,
		success:function(){
			alert("exito");
			document.location.href="registro.html";
		}
	});
}
function mostrar_actividades(){
		$(".cuadros").hide();
		$.ajax({
		type:"post",
		dataType:"json",
		url:"php/registro.php",
		data:"opcion=mostrar_actividad",
		success:function(sms){
			cantidad = sms.length;
			html="<table class='table'>";
			html+="<tr>";
			html+="<td>Nro</td><td>Actividad</td><td>Hora</td><td>Responsables</td><td>Fecha</td><td>Editar</td><td>Eliminar</td>";
			html+="</tr>";
			for(var i = 0 ; i < cantidad ; i++){
				var capturar = sms[i][0]+"*"+sms[i][1]+"*"+sms[i][2]+"*"+sms[i][3]+"*"+sms[i][4];
				html+="<tr>";
				html+="<td>"+(i+1)+"</td><td>"+sms[i][1]+"</td><td>"+sms[i][2]+"</td><td>"+sms[i][3]+"</td><td>"+sms[i][4]+"</td><td><button data-toggle='modal' data-target='#actividad-Modal' class='btn btn-success' onclick='modificar_actividad("+'"'+capturar+'"'+");'>editar</button></td><td><button class='btn btn-danger' onclick='borrando_actividad("+sms[i][0]+");'>eliminar</button></td>";
				html+="</tr>";	
			}
			html+="</table>";

			$(".fuente_fotos").html(html);
		}
	});
}
function modificar_actividad(datos){
	var cd = datos.split("*");
	$(".actividad_id").val(cd[0]);
	$(".e-actividad").val(cd[1]);
	$(".e-hora").val(cd[2]);
	$(".e-fc_actividad").val(cd[4]);
	$(".e-responsable").val(cd[3]);
}
function enviar_actividad(){

	var id = $(".actividad_id").val();
	var actividad = $(".e-actividad").val();
	var fc_actividad = $(".e-fc_actividad").val();
	var hora = $(".e-hora").val();
	var responsable = $(".e-responsable").val();

	form = new FormData($(".for-actividad")[0]);
	form.append("id",id);
	form.append("actividad",actividad);
	form.append("hora",hora);
	form.append("responsable",responsable);
	form.append("fc_actividad",fc_actividad);
	form.append("opcion","modificar_actividad");

	if(confirm("quieres cambiar")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:form,
			contentType:false,
			processData:false,
			cache:false,
			success:function (){
				alert("exito");
				document.location.href="registro.html";
			}
		});
	}
}
function borrando_actividad(codes){
	enviar = "id="+codes;
	enviar+="&opcion=borrar_actividad";

	if(confirm("¿desea eliminar?")){
		$.ajax({
			type:"post",
			url:"php/registro.php",
			data:enviar,
			success:function (datos){
				alert("eliminado");
				document.location.href="registro.html";
			}
		});
	}
}