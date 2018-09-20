// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
 {
     code: "ST",
     nom: "Stark"
 },
 {
     code: "LA",
     nom: "Lannister"
 },
 {
     code: "BA",
     nom: "Baratheon"
 },
 {
     code: "TA",
     nom: "Targaryen"
 }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
 switch (codeMaison) {
 case "ST":
     return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
 case "LA":
     return ["Tywin", "Cersei", "Jaime", "Tyrion"];
 case "BA":
     return ["Robert", "Stannis", "Renly"];
 case "TA":
     return ["Aerys", "Daenerys", "Viserys"];
 default:
     return [];
 }
}

// let persos = document.getElementById('persos');
// let select = document.querySelector('select');

// for (let i=0;i<maisons.length;i++) {
//  let option = document.createElement('option');
//  option.textContent = maisons[i].nom;
// option.value = maison[i].code;
 
//  select.appendChild(option);

//  select.addEventListener('change',(e)=>{
//   persos.innerHTML = '<li>'+getPersonnages(option.value)+'</li>';
//  });
// }

let option = (text, valeur) => {
 var element = document.createElement("option");
 element.textContent = text;
 element.value = valeur;
 return element;
}

let listItem = (text) => {
 var element = document.createElement("li");
 element.textContent = text;
 return element;
}

var maisonElt = document.querySelector("select");

maisons.forEach(function (maison) {
 maisonElt.appendChild(option(maison.nom, maison.code));
});

maisonElt.addEventListener("change", (e) => {
 var persos = getPersonnages(e.target.value);
 var persosElt = document.getElementById("persos");
 persosElt.innerHTML = "";
 persos.forEach((perso) => {
     persosElt.appendChild(listItem(perso));
 });
});