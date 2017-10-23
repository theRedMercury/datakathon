<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>TO BE DETERMINED (index.html)</title>
	</head>
	<body>
	<?php
		if(isset($_GET['prenom']) && $_GET['nom']){	
			echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
			echo '<script>window.location="pages/charts.php?nom=' . $_GET['prenom'].'&prenom='. $_GET['nom'] .'"</script>';
		}
	?>
	</body>
</html>
