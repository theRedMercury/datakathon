$(function(){
	$('#style').select2();
	$('#categorie').select2();
	$('#name_brewery').select2();

	$('#switchId').on('click', function(){
		if($('#hiddenLabelSwitchId').text() === "Inclure"){
			$('#hiddenLabelSwitchId').html("Exclure");
		} else if($('#hiddenLabelSwitchId').text() === "Exclure"){
			$('#hiddenLabelSwitchId').html("Inclure");
		}
	});
})