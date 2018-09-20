//var couleurTexte = prompt("Entrez la couleur du texte :");
//var couleurFond = prompt("Entrez la couleur du fond :");

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = 'white';
    divsElts[i].style.backgroundColor = 'red';
}