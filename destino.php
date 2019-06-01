<?php 
// 	$carpetaAdjunta="imagenes_/";
// if($_SERVER['REQUEST_METHOD']=="POST"){
// 			parse_str(file_get_contents("php://input"),$datosDELETE);
// 			$key= $datosDELETE['key'];
// 			unlink($carpetaAdjunta.$key);
			
// 			echo 0;
// }
$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];
	move_uploaded_file($tmp_file, 'imagenes_/'. $filename);
?>
