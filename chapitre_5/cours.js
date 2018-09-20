function clic() {
 console.log("clic!");
}
var boutonElt = document.getElementById('bouton');
boutonElt.addEventListener('click', clic);



// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);



// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (e) {
 console.log("Evènement : " + e.type +
  ", texte de la cible : " + e.target.textContent);
});



// Gestion du clic sur le document
document.addEventListener("click", function () {
 console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
 console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
 console.log("Gestionnaire bouton");
});



// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
 console.log("Gestionnaire bouton");
 e.stopPropagation(); // Arrêt de la propagation de l'événement
});


document.getElementById('interdit').addEventListener('click', (e) => {
 console.log('continuez plutôt à lire le cours');
 e.preventDefault();
});