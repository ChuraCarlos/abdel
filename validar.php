<?php
require_once("php/conexion.php");
session_start();
$login = $_POST["login"];
$clave = $_POST["password"];

$sql = "SELECT * FROM administrador,dato WHERE login = '$login' AND clave = '$clave' AND id_dato = dato_id_dato";
$enviar = new conexion();
$enviar->conectar();
$igual = $enviar->conex->query($sql);
	
	if($igual->num_rows>0){
		while($fila = $igual->fetch_array()){
			$objeto[] = $fila;
		}
		$js = json_encode($objeto);
		$data = json_decode($js);
		

		$_SESSION["nombre"] = $data[0]->nombre;
		$_SESSION["apellido"] = $data[0]->apellido;
		$_SESSION["foto"] = $data[0]->foto;

		header("Location: registro.html");
		
	}
	else{
		echo "datos incorrectos";	
		header("Location: login.html");	
	}


/*if(){

session_start();	
}else{
	
}*/

?>