let bouton = document.getElementById('clic');
let compteurClics = document.getElementById('compteurClics');
let desactiver = document.getElementById('desactiver');


let nbClics = 0;
bouton.addEventListener('click',clic=()=>{
 nbClics++;
 return compteurClics.textContent = nbClics;
});

desactiver.addEventListener('click',()=>{
 bouton.removeEventListener('click',clic);
});