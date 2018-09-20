let contenu = getComputedStyle(document.getElementById('contenu'));

let pElt = document.createElement('p');
pElt.textContent += 'Informations sur l\'éléement';
let unorderd = document.createElement('ul');
let listItem1 = document.createElement('li');
listItem1.textContent = "Hauter : "+ contenu.width;
let listItem2 = document.createElement('li');
listItem2.textContent = "Longueur : "+ contenu.height;
unorderd.appendChild(listItem1);
unorderd.appendChild(listItem2);
pElt.appendChild(unorderd);
document.getElementById('infos').appendChild(pElt);