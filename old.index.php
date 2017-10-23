 <!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>DATAKATHON</h1>
<p>This is a paragraph.</p>

 <label> Exclure ? </label> <input type="checkbox" name="vehicle" value="Bike"></br>
 
<?php

	$serveurWeb = 'http://10.5.1.250/team1/';
	
	
	//echo $obj_style->{'feed'}->{'feed'}[0]->{'name_beer'};	
	
	//echo "<br/>-------------";

	//var_dump($result
	
	function getArrayCritere($nomCritere){
		$critere_Json = file_get_contents('http://10.5.1.250/team1/'.$nomCritere);
		$obj_Critere = json_decode($critere_Json);
		$array_Style = $obj_Critere->{'feed'}->{'feed'};
		
		return $array_Style;
	}
	
	function arrayCritereToHtmlSpinBox($arrayCritere, $id, $nom){
		$htmlSpinBox = '<select id=\"' . $nom . '\" onchange=\"' . $nom.'SelectValue() . '\">';
		foreach($arrayCritere as $ligne){
			//nomCritere
			$htmlSpinBox = $htmlSpinBox . "<option value=\"" . $ligne->{$id} . "\">" . $ligne->{$nom} . "</option>";
		}
		$htmlSpinBox = $htmlSpinBox. "</select>";
		
		return $htmlSpinBox;
	}
	
	echo "Style : ";
	echo arrayCritereToHtmlSpinBox(getArrayCritere('style'), 'id_styles', 'style');
	echo "<br/>";
	echo "Category : ";
	echo arrayCritereToHtmlSpinBox(getArrayCritere('category'), 'id_categories', 'categorie');
	echo "<br/>";
	echo "Brewery : ";
	echo arrayCritereToHtmlSpinBox(getArrayCritere('brewery'), 'id_breweries', 'name_brewery');
?>

<script>
function styleSelectValue() {
    var x = document.getElementById("style").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

<br/>
<label> Inclure </label> <textarea rows="4" cols="50" name="inclusion" form="usrform"> </textarea>
<br/>
<label> Exclure </label> <textarea rows="4" cols="50" name="exclusion" form="usrform"> </textarea>
</br>
 <input type="text" name="nbrResultats" value="Aucun résultat"><br>
 
 <textarea rows="4" cols="50" name="resultat" form="usrform"> </textarea>
 </br>
 <input type="submit" value="Submit">
 <input type="submit" value="Cancel">
</body>
</html> 