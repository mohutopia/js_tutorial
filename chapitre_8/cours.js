// méthode synchrone //


// // Création d'une requête HTTP
// var req = new XMLHttpRequest();
// // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// req.open("GET", "data/langages.txt", false);
// // Envoi de la requête
// req.send(null);
// // Affiche la réponse reçue pour la requête
// console.log(req.responseText);


// méthode asynchrone //


// var req = new XMLHttpRequest();
// // La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
// req.open("GET", "data/langages.txt");
// // Gestion de l'événement indiquant la fin de la requête
// req.addEventListener("load", function () {
//     // Affiche la réponse reçue pour la requête
//     console.log(req.responseText);
// });
// req.send(null);


// avec gestion d'erreur //


// var req = new XMLHttpRequest();
// req.open("GET", "data/langages.txt");
// req.addEventListener("load", function () {
//     if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
//         console.log(req.responseText);
//     } else {
//         // Affichage des informations sur l'échec du traitement de la requête
//         console.error(req.status + " " + req.statusText);
//     }
// });
// req.addEventListener("error", function () {
//     // La requête n'a pas réussi à atteindre le serveur
//     console.error("Erreur réseau");
// });
// req.send(null);


// fonction génértique //


// // Exécute un appel AJAX GET
// // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
// function ajaxGet(url, callback) {
//  var req = new XMLHttpRequest();
//  req.open("GET", url);
//  req.addEventListener("load", function () {
//      if (req.status >= 200 && req.status < 400) {
//          // Appelle la fonction callback en lui passant la réponse de la requête
//          callback(req.responseText);
//      } else {
//          console.error(req.status + " " + req.statusText + " " + url);
//      }
//  });
//  req.addEventListener("error", function () {
//      console.error("Erreur réseau avec l'URL " + url);
//  });
//  req.send(null);
// }
// // function afficher(reponse) {
// //  console.log(reponse);
// // }
// // ajaxGet("data/langages.txt", afficher);
// ajaxGet("data/langages.txt", function (reponse) {
//     console.log(reponse);
// });


// utilisé JSON //


// ajaxGet("data/films.json", function (reponse) {
//     // Transforme la réponse en tableau d'objets JavaScript
//     var films = JSON.parse(reponse);
//     // Affiche le titre de chaque film
//     films.forEach(function (film) {
//         console.log(film.titre);
//     })
// });


// ajaxGet("data/langages.txt", function (reponse) {
//  console.log(reponse);
// });

let langages = document.getElementById('langages');

ajaxGet('data/langages.txt', function(reponse){
 let myResponse = reponse.split(';');
 myResponse.forEach(element => {
  let listItem = document.createElement('li');
  listItem.textContent = element;
  langages.appendChild(listItem);
 });
});