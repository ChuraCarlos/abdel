<?php
	require_once("conexion.php");
	

	$opcion = $_POST["opcion"];

	switch ($opcion) {

		case 'guardar_imagen':

			$fecha = $_POST["fecha_foto"];

			$foto_nombre = $_FILES["fts"]["name"];
			$foto_tipo   = $_FILES["fts"]["type"];
			$fotos 		 = $_FILES["fts"]["tmp_name"];

			$fecha_actual = date("y-m-d");
			$filtro = explode("/",$foto_tipo);
			$hora = time();
			$tipo = $fecha_actual."--".$hora.".".$filtro[1];
			
			$sql = "INSERT INTO foto_fecha VALUES(0,'$tipo','','$fecha')";
			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);

			move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/fotos/".$tipo);

		break;
		case 'modificar_imagen':

			$id = $_POST["id"];
			$fecha = $_POST["fecha"];
			$foto = $_POST["foto"];
			$oculto = $_POST["oculto"];

			if($_FILES["disponible"]["tmp_name"] !== ""){
				$foto_nombre = $_FILES["disponible"]["name"];
				$foto_tipo   = $_FILES["disponible"]["type"];
				$fotos 		 = $_FILES["disponible"]["tmp_name"];

				$fecha_actual = date("y-m-d");
				$filtro = explode("/",$foto_tipo);
				$hora = time();
				$tipo = $fecha_actual."--".$hora.".".$filtro[1];
			
				$sql = "UPDATE foto_fecha SET foto_fe='$tipo', fecha_fo='$fecha' WHERE id_foto_fecha='$id'";
				$enviar = new conexion();
				$enviar->conectar();
				$enviar->conex->query($sql);
				move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/fotos/".$tipo);
				unlink("../img/fotos/".$oculto);
			
			}else{
			
				$sql = "UPDATE foto_fecha SET fecha_fo='$fecha' WHERE id_foto_fecha='$id'";
				$enviar = new conexion();
				$enviar->conectar();
				$enviar->conex->query($sql);
			}

		break;

		case "mostrar_imagen":

			$anual = $_POST["anual"];
			$meses = $_POST["meses"];

			$sql = "SELECT * FROM foto_fecha WHERE fecha_fo LIKE '$anual-$meses%'";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }
		echo $j;

		break;
		case "mostrar_fechas":

			$sql = "SELECT * FROM foto_fecha";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }
		echo $j;

		break;
		case "eliminar_foto":
			$codigo = $_POST["codigo"];
			$nombre = $_POST["nombre"];
			$sql="DELETE FROM foto_fecha WHERE id_foto_fecha='$codigo'";
			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);
			unlink("../img/fotos/".$nombre);
		break;
		case "guardar_noticias":

			$titulo = $_POST["titulo"];
			$descripcion = $_POST["descripcion"];
			$calendario = $_POST["calendario"];
			
			$foto_nombre = $_FILES["registro"]["name"];
			$foto_tipo   = $_FILES["registro"]["type"];
			$fotos 		 = $_FILES["registro"]["tmp_name"];

			$fecha_actual = date("y-m-d");
			$filtro = explode("/",$foto_tipo);
			$hora = time();
			$tipo = $fecha_actual."--".$hora.".".$filtro[1];
			
			$sql = "INSERT INTO noticia VALUES(0,'$titulo','$descripcion','$calendario','$tipo')";
			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);

			move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/noticia/".$tipo);

		break;
		case "modificar_noticias":
			$id = $_POST["id"];
			$titulo = $_POST["titulo"];
			$noticia = $_POST["noticia"];
			$fecha = $_POST["fecha"];
			$foto = $_POST["foto"];
			$files = $_POST["files"];

			if($_FILES["e-revista"]["tmp_name"] !== ""){
				$foto_nombre = $_FILES["e-revista"]["name"];
				$foto_tipo   = $_FILES["e-revista"]["type"];
				$fotos 		 = $_FILES["e-revista"]["tmp_name"];

				$fecha_actual = date("y-m-d");
				$filtro = explode("/",$foto_tipo);
				$hora = time();
				$tipo = $fecha_actual."--".$hora.".".$filtro[1];

				$sql = "UPDATE noticia SET titulo='$titulo', texto='$noticia', fecha_no='$fecha', foto_titulo='$tipo' WHERE id_noticia='$id'";
				$enviar = new conexion();
				$enviar->conectar();
				$enviar->conex->query($sql);

				move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/noticia/".$tipo);
				unlink("../img/fotos/".$files);
				
			}else{
				$sql = "UPDATE noticia SET titulo='$titulo', texto='$noticia', fecha_no='$fecha' WHERE id_noticia='$id'";
				$enviar = new conexion();
				$enviar->conectar();
				$enviar->conex->query($sql);
				
			}
			
			
		break;
		case "eliminar_noticias":
			$codigo = $_POST["codigo"];
			$nombre = $_POST["nombre"];

			$sql="DELETE FROM noticia WHERE id_noticia='$codigo'";
			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);
			unlink("../img/noticia/".$nombre);
		break;
		case "mostrando_noticias":
			$sql = "SELECT * FROM noticia";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }
			echo $j;
		break;
		case "registrando_docente":
			$nombre = $_POST["nombre"];
			$apellido = $_POST["apellido"];
			$dni = $_POST["dni"];
			$foto_nombre = $_FILES["formu"]["name"];
			$foto_tipo = $_FILES["formu"]["type"];
			$fotos = $_FILES["formu"]["tmp_name"];
			$email = $_POST["email"];

			$fecha_actual = date("y-m-d");
			$filtro = explode("/",$foto_tipo);
			$hora = time();
			$tipo = $fecha_actual."--".$hora.".".$filtro[1];
			move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/docente/".$tipo);

			$sql="INSERT INTO dato VALUES(0,'$nombre','$apellido','$dni','$email','$tipo')";

			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);
			$punto = $enviar->conex->insert_id;

			$otro = "INSERT INTO docente VALUES(0,'$punto')";
			$send = new conexion();
			$send->conectar();
			$send->conex->query($otro);

		break;
		case "modificar_docente":
			$id = $_POST["id"];
			$nombre = $_POST["nombre"];
			$apellido = $_POST["apellido"];
			$dni = $_POST["dni"];
			$email = $_POST["email"];
			$file = $_POST["file"];
			

			if($_FILES["e-formu"]["tmp_name"] !== ""){
				$foto_nombre = $_FILES["e-formu"]["name"];
				$foto_tipo = $_FILES["e-formu"]["type"];
				$fotos = $_FILES["e-formu"]["tmp_name"];

				$fecha_actual = date("y-m-d");
				$filtro = explode("/",$foto_tipo);
				$hora = time();
				$tipo = $fecha_actual."--".$hora.".".$filtro[1];
				move_uploaded_file($fotos, "C:/xampp/htdocs/colegio/img/docente/".$tipo);

				$sql="UPDATE dato SET nombre='$nombre', apellido='$apellido', dni='$dni', email='$email',foto='$tipo' WHERE id_dato='$id'";
				
			}else{
				$sql="UPDATE dato SET nombre='$nombre', apellido='$apellido', dni='$dni', email='$email' WHERE id_dato='$id'";
				
			}

			

			// $sql="UPDATE dato SET nombre='$nombre', apellido='$apellido', dni='$dni', email='$email',foto='$tipo'";

			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);
			unlink("../img/docente/".$file);

		break;
		case "mostrando_docentes":
			$sql = "SELECT * FROM docente,dato WHERE id_dato=dato_id_dato";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }
			echo $j;

		break;
		case "borrar_docente":
			$id_dato 	= $_POST["id_dato"];
			$id_docente = $_POST["id_docente"];
			$file = $_POST["file"];
			
			$sql_docente = "DELETE FROM docente WHERE id_docente='$id_docente'";
			$sql_dato = "DELETE FROM dato WHERE id_dato='$id_dato'";

			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql_docente);

			$reenviar = new conexion();
			$reenviar->conectar();
			$reenviar->conex->query($sql_dato);

			unlink("../img/docente/".$file);

		break;
		case "guardar_actividad":
			$actividad = $_POST["actividad"];
			$hora = $_POST["hora"];
			$responsable = $_POST["responsable"];
			$fecha_actividad = $_POST["fecha_actividad"];

			$sql = "INSERT INTO actividad VALUES(0,'$actividad','$hora','$responsable','$fecha_actividad')";
			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);


		break;
		case "mostrar_actividad":


			$sql = "SELECT * FROM actividad";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }
			echo $j;
		break;
		case "modificar_actividad":
			$id = $_POST["id"];
			$actividad = $_POST["actividad"];
			$hora = $_POST["hora"];
			$responsable = $_POST["responsable"];
			$fc_actividad = $_POST["fc_actividad"];

			$sql="UPDATE actividad SET nombre_actividad='$actividad', hora_actividad='$hora', responsable='$responsable',fecha_actividad='$fc_actividad' WHERE id_actividad='$id' ";

			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);
			

		break;
		case "borrar_actividad":
			$id_actividad = $_POST["id"];
			
			$sql = "DELETE FROM actividad WHERE id_actividad='$id_actividad'";

			$enviar = new conexion();
			$enviar->conectar();
			$enviar->conex->query($sql);

		break;
		case "buscar_actividad":

			$mes = $_POST["mes"];
			$valor_a = date("y");

			$objetivo = $valor_a."-".$mes;

			$sql = "SELECT * FROM actividad WHERE fecha_actividad LIKE '%$objetivo%'";

            $con = new conexion();
            $con->conectar();
		    $ok = $con->conex->query($sql);
			if($ok->num_rows>0)
			{	while($r=$ok->fetch_array())
					$a[]=$r;
				$j=json_encode($a);
			}
            else{
                $j=0;
            }

            echo $j;
		break;
	}
?>