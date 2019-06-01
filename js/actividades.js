$(document).ready(function(){
	calendario();
	
});
function cargar_meses(){

	var mes  = $(".meses").val();
	cale = ["enero","febreo","marzo","abril","mayo","junio","julio","agosto","septiempre","octubre","noviembre","diciembre"];
	entero = parseInt(mes)-1;
	mex = cale[entero];
	datos  = "mes="+mes;
	datos += "&opcion=buscar_actividad"; 


	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/registro.php",
		data:datos,
		success:function(sms){
			var can = sms.length;
			html="";
			html+="<table class='table'>";
			html+="<tr>";
			html+="<td colspan='5' align='center'>"+mex+"</td>";
			html+="</tr>";
			html+="<tr>";
			html+="<td>Nro</td><td>ACTIVIDAD</td><td>HORA</td><td>RESPONSABLES</td><td>FECHA</td>";
			html+="</tr>";
			for(var i = 0; i < can; i++){
				html+="<tr>";
				html+="<td>"+(i+1)+"</td><td>"+sms[i][1]+"</td><td>"+sms[i][2]+"</td><td>"+sms[i][3]+"</td><td>"+sms[i][4]+"</td>";
				html+="</tr>";
			}
			html+="</table>";
			$(".foto-anual").html(html);
		}
	});
}
function calendario(){
	calendario = ["enero","febreo","marzo","abril","mayo","junio","julio","agosto","septiempre","octubre","noviembre","diciembre"];
	var max_calendario = calendario.length;
	etiqueta ="<div class='row'>";
	// etiqueta +="<div class='col-md-3'>"; 
	// etiqueta += "<input type='text' class='form-control anual' placeholder='ingresar año ejemplo:2017'/>";
	// etiqueta +="</div>";
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
	etiqueta += "<button class='form-control btn btn-info' onclick='cargar_meses();'>Buscar</button>";
	etiqueta +="</div>"; 
	etiqueta +="</div>";
	$(".contenedor-menu").html(etiqueta);
}