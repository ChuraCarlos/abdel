<?php
	require_once("conexion.php");
	$codigo = $_GET["codigo"];

			$sql = "SELECT * FROM noticia WHERE id_noticia='$codigo'";

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
			

			$datos = json_decode($j);
			
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>portal web</title>
	<link rel="stylesheet" type="text/css" href="../dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="../css/noticia.css">
	<script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="../dist/js/bootstrap.min.js"></script>

</head>
<body>

  <section class="capa">
  <nav id="lider" class="navbar navbar-inverse libre" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" 
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- <a class="navbar-brand" href="#">Brand</a> -->
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->
        <!-- <li><a onclick="moverse();">Inicio</a></li>
        <li><a>Noticias</a></li> -->
        <!-- <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" 
                aria-expanded="false">Actividades <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li> -->
      </ul>
      <!-- <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form> -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="../index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Inicio</a></li>
        <li><a href="../noticia.html"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span> Noticias</a></li>
        <!-- <li><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span> Actividades</a></li> -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" 
                aria-expanded="false">La Institucion <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="../docente.html">Plana De Docentes</a></li>
            <li><a href="../revista.html">Actividades por fechas</a></li>
            <li><a href="../actividades.html">Cronograma de Actividades</a></li>
            <li class="divider"></li>
            <li><a href="../login.html">Sistema</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

      <div class="container-fluid">
        <div class="row fila-blanco">
          <div class="col-md-2 imagenes"><img class="colegio" src="../img/santa.png" /></div>
          <div class="col-md-10 parrafo">
            <h2><span class="guion-abajo">INSTITUCION EDUCATIVA "SANTA ANITA"</span></h2>
            <h3><span class="guion-borde"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span> NOTICIAS:</span></h3>
          </div>
        </div>
      </div>

      <hr>
      
       <div class="container-fluid todo">
	        <div class="row lineas">
	          <div class="col-md-offset-2 col-md-8 informacion">
              <h2 style="text-align:left;"><?php echo $datos[0]->titulo; ?>:</h2>
              <h4 style="text-align:left;"><?php echo $datos[0]->fecha_no; ?></h4>
              <hr/>
	          	<img class="dise" style="width:100%;height:500px" src="../img/noticia/<?php echo $datos[0]->foto_titulo; ?>"/>
	            <hr/>
              <p style="text-align:left;"><?php echo $datos[0]->texto; ?></p>
            </div>
	        </div>

      </div>
		
    <!--  <hr>

      <div class="container-fluid">
        <div class="row lineas">

          <div class="col-md-3 presentacion"><img class="dise" src="img/noticia/5.jpg">
            <h2>titulo de la noticia</h2>
            <p>Descripcion de la Noticia</p>
            <p><a href="#" class="forma-boton"><span class="glyphicon glyphicon-share-alt"></span> mas informacion</a></p>
          </div>

          <div class="col-md-3 presentacion"><img class="dise" src="img/noticia/6.jpg">
            <h2>titulo de la noticia</h2>
            <p>Descripcion de la Noticia</p>
            <p><a href="#" class="forma-boton"><span class="glyphicon glyphicon-share-alt"></span> mas informacion</a></p>
          </div>

          <div class="col-md-3 presentacion"><img class="dise" src="img/noticia/7.jpg">
            <h2>titulo de la noticia</h2>
            <p>Descripcion de la Noticia</p>
            <p><a href="#" class="forma-boton"><span class="glyphicon glyphicon-share-alt"></span> mas informacion</a></p>
          </div>

          <div class="col-md-3 presentacion"><img class="dise" src="img/noticia/8.jpg">
            <h2>titulo de la noticia</h2>
            <p>Descripcion de la Noticia</p>
            <p><a href="#" class="forma-boton"><span class="glyphicon glyphicon-share-alt"></span> mas informacion</a></p>
          </div>

        </div>
      </div> -->
</section>

      <!-- <div class="container not-cuadro">
        <div class="row featurette">
          <div class="col-md-7 col-md-push-5">
            <h2 class="featurette-heading">NOTICIAS: <span class="text-muted">Veala por Usted mismo.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 col-md-pull-7">
            <img class="featurette-image img-responsive center-block" src="img/santa.png" style="width:250px;height:250px;" alt="Generic placeholder image">
          </div>
        </div>
      </div> -->
      


</body>
</html>