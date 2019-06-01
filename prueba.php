<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>prueba</title>
	<link rel="stylesheet" type="text/css" href="dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" media="all" href="fileinput-master/css/fileinput.min.css"/>
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="fileinput-master/js/fileinput.min.js"></script>
	<script type="text/javascript" src="dist/js/bootstrap.min.js"></script>
</head>
<?php 
	// $directory = "imagenes_/";
	// $images = glob($directory."*.*");
?>
<body>
	
	<!-- <input id="archivos" name="imagenes[]" type="file" multiple=true class="file-loading"> -->

		<div class="container">
			<h1>Uploader</h1>
			<hr>
			<form action="#">
				<input type="file" name="image" >
				<button class="btn btn-sm btn-info upload" type="submit">Upload</button>
				<button type="button" class="btn btn-sm btn-danger cancel">Cancel</button>

				<div class="progress progress-striped active">
					<div class="progress-bar" style="width:0%"></div>
				</div>
			</form>
		</div>
</body>
<script type="text/javascript">
/*$("#archivos").fileinput({
	uploadUrl: "subir.php", 
    uploadAsync: false,
    minFileCount: 1,
    maxFileCount: 1,
	showUpload: true, 
	showRemove: false,
	initialPreview: [
	<?php foreach($images as $image){?>
		"<img src='<?php echo $image; ?>' height='120px' class='file-preview-image'>",
	<?php } ?>],
    initialPreviewConfig: [<?php foreach($images as $image){ $infoImagenes=explode("/",$image);?>
	{caption: "<?php echo $infoImagenes[1];?>",  height: "120px", url: "destino.php", key:"<?php echo $infoImagenes[1];?>"},
	<?php } ?>]
	}).on("filebatchselected", function(event, files) {
	
	$("#archivos").fileinput("upload");
	
	});*/
$('.upload-all').click(function(){
			//submit all form
			$('form').submit();
		});
		$('.cancel-all').click(function(){
			//submit all form
			$('form .cancel').click();
		});
		$(document).on('submit','form',function(e){
			e.preventDefault();
			$form = $(this);
			uploadImage($form);
		});
		function uploadImage($form){
			$form.find('.progress-bar').removeClass('progress-bar-success')
										.removeClass('progress-bar-danger');
			var formdata = new FormData($form[0]); //formelement
			var request = new XMLHttpRequest();
			//progress event...
			request.upload.addEventListener('progress',function(e){
				var percent = Math.round(e.loaded/e.total * 100);
				$form.find('.progress-bar').width(percent+'%').html(percent+'%');
			});
			//progress completed load event
			request.addEventListener('load',function(e){
				$form.find('.progress-bar').addClass('progress-bar-success').html('upload completed....');
			});
			request.open('post', 'destino.php');
			request.send(formdata);
			$form.on('click','.cancel',function(){
				request.abort();
				$form.find('.progress-bar')
					.addClass('progress-bar-danger')
					.removeClass('progress-bar-success')
					.html('upload aborted...');
			});
		}

</script>
</html>
