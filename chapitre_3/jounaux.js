// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
/*journaux.forEach((elt) => {
 document.getElementById('contenu').insertAdjacentHTML("afterBegin",'<li><a href="#">'+elt+'</a></li>');
});*/

//pour inverser la liste du output
for(let i=journaux.length-1;i>=0;i--){
 document.getElementById('contenu').insertAdjacentHTML("afterBegin",'<li><a href="#">'+journaux[i]+'</a></li>');
}