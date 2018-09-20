var dom = document.getElementById("langages");

dom.innerHTML += '<li id="c">C</li>';

// dom.innerHTML = '';
document.querySelector("h1").textContent += " de programmation";


// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
// ou même ça : document.querySelector("h1").id = "titre";

var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
dom.appendChild(pythonElt);

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
dom.appendChild(rubyElt); // Insertion du nouvel élément

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
dom.insertBefore(perlElt, 
    document.getElementById("php"));

// Ajout d'un élément au tout début de la liste
dom.insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

// remplacer un noeud
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
dom.replaceChild(bashElt, perlElt);
// supprimer un noeud
dom.removeChild(bashElt);

// AJOUTER UN PARAGRAPH
dom.insertAdjacentHTML("afterEnd", '<p>En voici une <a href="#" target="_blank">liste</a> plus complète.</p>');