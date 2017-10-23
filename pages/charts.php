<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">    <!--TODO-->
		<title>TO BE DETERMINED (charts.htm)</title>
        <!-- CHART 3D -->
        <style type="text/css">
            #container {
                height: 400px;      /* 3D chart size */
                min-width: 400px;   /* 3D chart size */
                max-width: 400px;   /* 3D chart size */
                margin: 0 auto;
            }
        </style>
	</head>
	<body>
        <!--LOADING SCRIPTS-->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>                                     <!--TODO-->
        <script src="../js/highcharts/highcharts.js"></script>
        <script src="../js/highcharts/highcharts-3d.js"></script>
        <script src="../js/highcharts/highcharts-more.js"></script>
        <script src="../js/highcharts/modules/exporting.js"></script>
        <script src="../js/highcharts/themes/sunset.js"></script>
        <script src="../js/bootstrap/js/bootstrap.min.js"></script>
        <script src="graphVisualisation.js"></script>

		
		
		<?
		if(isset($_GET['prenom']) && $_GET['nom']){	
			echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
		}
	?>
		
		
        <!--CHART PACK (HTML)-->
        <div id="wrapper">
            <div id="container01" class = "row">
                <!--CHART3D-->
                <div id="chart3D" class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center"></div>
                <!--CHARTXY-->
                <div id="chartXY" class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center"></div>
            </div>
            <div id="container02" class = "row">
                <!--CHARTYZ-->
                <div id="chartYZ" class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center""></div>
                <!--CHARTZX-->
                <div id="chartZX" class = "col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center"></div>
            </div>
        </div>

        <!--SCRIPT DE TEST-->
        <script>

            var test01 = {name: "name01", brewery: "brewery01", country: "country01", ABV: 1.0, EBC: 2.0, DLUO: 0.0}; 
            var test02 = {name: "name02", brewery: "brewery02", country: "country02", ABV: 0.0, EBC: 1.0, DLUO: 0.0}; 
            var test03 = {name: "name03", brewery: "brewery03", country: "country03", ABV: 3.0, EBC: 0.0, DLUO: 1.0}; 
            var test04 = {name: "name04", brewery: "brewery04", country: "country04", ABV: 10.0, EBC: 10.0, DLUO: 10.0}; 
            var vect = [test01,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04,test02,test03,test04];
            
            graphVisualisation(vect)

        </script>

	</body>
</html>