// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
 {
     enonce: "Combien font 2+2 ?",
     reponse: "2+2 = 4"
 },
 {
     enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
     reponse: "1492"
 },
 {
     enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
     reponse: "La lettre N"
 }
];

let form = document.createElement('form');
for(let i=0;i<questions.length;i++){
 let phrase = document.createElement('p');
 phrase.innerHTML = '<strong>Question ' + Number(i+1) + ' :</strong> <em>' + questions[i].enonce + '</em>';
 let button = document.createElement('buton');
 button.innerHTML='<button>Afficher la réponse</button><br>';
 button.addEventListener('click',()=>{
  button.innerHTML = '<p>'+ questions[i].reponse +'</p>';
 });

 form.appendChild(phrase);
 form.appendChild(button);
}
document.getElementById('contenu').appendChild(form);