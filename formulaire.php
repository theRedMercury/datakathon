<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="design/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="design/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="design/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="design/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- Select 2 -->
    <link href="design/select2/dist/css/select2.min.css" rel="stylesheet" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style type="text/css">

        /*.container {*/
          html, body {
            height: 100%;
            margin: 0;
            padding: 0 0;
        }

        /* The switch - the box around the slider */
        .switch {
          position: relative;
          display: inline-block;
          width: 30px;
          height: 17px;
        }

        /* Hide default HTML checkbox */
        .switch input {display:none;}

        /* The slider */
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 13px;
          width: 13px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: #2196F3;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(13px);
          -ms-transform: translateX(13px);
          transform: translateX(13px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 17px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
    </style>

</head>

<body>
<?php
        $serveurWeb = 'http://10.5.1.250/team1/';
		
        function getArrayCritere($nomCritere) {
			
			$file_headers = @get_headers($serveurWeb);
			if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
				return null;
			}
			
            $critere_Json = file_get_contents('http://10.5.1.250/team1/' . $nomCritere);
            $obj_Critere = json_decode($critere_Json);
            $array_Style = $obj_Critere->{'feed'}->{'feed'};
			
            return $array_Style;
        }

        function arrayCritereToHtmlSpinBox($arrayCritere, $id, $nom) {
			$htmlSpinBox = '<select id="' . $nom . '" onchange="filtre.' . $nom . 'SelectValue()' . '">';
            //$htmlSpinBox = '<select id="lol" onchange="filtre.' . $nom . 'SelectValue()' . '">';//
			if($arrayCritere != null){
				foreach ($arrayCritere as $ligne) {
					$htmlSpinBox = $htmlSpinBox . "<option value=" . $ligne->{$id} . ">" . $ligne->{$nom} . "</option>";
				}
			}
            $htmlSpinBox = $htmlSpinBox . "</select>";

            return $htmlSpinBox;
        }
    ?>
	<script src="scripts/scriptFiltre.js"> </script>
	<script>
        
			filtre= new Filtre();
			function testSuccessMethod(response){				
				ajouterBieresListes(response.feed.feed);
				//$('#pid').text("Réussite");
			}
			
			function ajouterBieresListes(arrayBieres){	
				filtre.ajouterBieres(arrayBieres.length);
				for (var index = 0; index < arrayBieres.length; index++) {
					filtre.pushBiere(arrayBieres[0]);
					//document.getElementById('listeBieres').innerHTML+=arrayBieres[index].name_beer + ",";
				}								
				document.getElementById('nbrBieres').value = filtre.getNbreBieres() + " bières";
				debugger;
			}		
        </script>
		<script src="scripts/networkCalls.js"></script>
		<script src="scripts/utils.js"></script>	
    <div class="container">
        <br>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                    <form role="form">
                        <fieldset>
                            <div class="row">
                                <div class="col-md-10 col-sd-10">
                                    <span id="labelSwitchId">Inclure</span>
                                    <span id="hiddenLabelSwitchId" style="display: none;">Exclure</span>
                                </div>

                                <div class="col-md-2 col-sd-2">
                                     <!-- Rounded switch -->
                                    <label class="switch">
                                      <input id="switchId" type="checkbox">
                                      <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>

                            <label>Style</label>
                            <div class="form-group">
								<?php echo arrayCritereToHtmlSpinBox(getArrayCritere('style'), 'id_styles', 'style'); ?>								   
                            </div>        
        
                            <label>Catégorie</label>
                            <div class="form-group">
								<?php echo arrayCritereToHtmlSpinBox(getArrayCritere('category'), 'id_categories', 'categorie');?>
                            </div>

                            <label>Brasserie</label>
                            <div class="form-group">
                                <?php echo arrayCritereToHtmlSpinBox(getArrayCritere('brewery'), 'id_breweries', 'name_brewery');?>
                            </div>

                            <form role="form">
                                <div class="form-group">
                                    
                                    <label>Eléments inclus</label>
                                    <textarea id="inclusion" class="form-control" readonly></textarea>

                                    <br>

                                    <label>Eléments exclus</label>
                                    <textarea id="exclusion" class="form-control" readonly></textarea>

                                </div>
                            </form>						

                            <br>

                            <!-- List of selected beers. -->
                            <label>Nombre de bières reprises par votre sélection : <span id="nbrBieres">0</span> </label>
							
							<br><br>
							
                            <div class="row">

                                <div class="center-block col-md-6 col-sm-6 col-xs-6 btn pull-left">
                                    <button id="idButtonback" type="button" class="btn btn-primary">Précédent</button>
                                </div>

                                <div class="center-block col-md-6 col-sm-6 col-xs-6 btn pull-right">
                                    <button id="idButtonNext" type="button" class="btn btn-primary">Suivant</button>
                                </div>

                            </div>

                            <br>

                        </fieldset>
                    </form>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="design/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="design/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="design/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="design/dist/js/sb-admin-2.js"></script>

    <!-- Select 2 -->
    <script src="design/select2/dist/js/select2.min.js"></script>

    <!-- Scripts. -->
    <script src="design/mouss/js/myscript.js"></script>
	
	
							 <script>        
								$(function(){
									$('#idButtonBack').on('click', function(){
										window.location = "tuiles.html";
									});
								})
								var a = filtre.getBieres();
								debugger;
								$(function(){
									$('#idButtonNext').on('click', function(){
										window.location = "graphe3D.php?nom=lol&prenom=lelelel";
									});
								})
							</script>

</body>

</html>
