class Filtre {
  
	constructor(hauteur, largeur) {
		this.nbrBieres = 0;
		this.bieres = [];
		this.listeInclusions = [];
		this.listeExclusions = [];
		this.listeInclusions["style"] = [];
		this.listeInclusions["name_brewery"] = [];
		this.listeInclusions["categorie"] = [];
		this.listeExclusions["style"] = [];
		this.listeExclusions["name_brewery"] = [];
		this.listeExclusions["categorie"] = [];
  }
  	
	styleSelectValue() {
	var selected = document.getElementById("style");				
	var optionSelected = selected.options[selected.selectedIndex];

	if(document.getElementById("switchId").checked == false){
		getBeweryById(selected.value);
		this.listeInclusions["style"].push({key:"id", value:selected.value})
		document.getElementById("inclusion").innerHTML = document.getElementById("inclusion").innerHTML + optionSelected.text + ", ";
	}else{
		this.listeExclusions["style"].push({key:"id", value:selected.value})
		document.getElementById("exclusion").innerHTML = document.getElementById("exclusion").innerHTML + optionSelected.text + ", ";
		}
	}
	
	pushBiere(biere){
		this.bieres.push(biere);
	}
	
	getBieres(){
		return this.bieres;
	}
	
	ajouterBieres(nbre){
		this.nbrBieres+=nbre;
	}
	
	getNbreBieres(){
		return this.nbrBieres;
	}

	categorieSelectValue() {
		var selected = document.getElementById("categorie");				
		var optionSelected = selected.options[selected.selectedIndex];
		
		if(document.getElementById("switchId").checked == false){
			this.listeInclusions["categorie"].push({key:"id", value:selected.value})
			document.getElementById("inclusion").innerHTML = document.getElementById("inclusion").innerHTML + optionSelected.text + ", ";
		}else{
			this.listeExclusions["categorie"].push({key:"id", value:selected.value})
			document.getElementById("exclusion").innerHTML = document.getElementById("exclusion").innerHTML + optionSelected.text + ", ";
		}
	}

	name_brewerySelectValue() {
		var selected = document.getElementById("name_brewery");				
		var optionSelected = selected.options[selected.selectedIndex];
		
		if(document.getElementById("switchId").checked == false){
			this.listeInclusions["name_brewery"].push({key:"id", value:selected.value})
			document.getElementById("inclusion").innerHTML = document.getElementById("inclusion").innerHTML + optionSelected.text + ", ";
		}else{
			this.listeExclusions["name_brewery"].push({key:"id", value:selected.value})
			document.getElementById("exclusion").innerHTML = document.getElementById("exclusion").innerHTML + optionSelected.text + ", ";
		}
	}
}