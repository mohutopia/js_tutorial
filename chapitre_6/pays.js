// Liste des pays
var listePays = [
 "Afghanistan",
 "Afrique du Sud",
 "Albanie",
 "Algérie",
 "Allemagne",
 "Andorre",
 "Angola",
 "Anguilla",
 "Antarctique",
 "Antigua-et-Barbuda",
 "Antilles néerlandaises",
 "Arabie saoudite",
 "Argentine",
 "Arménie",
 "Aruba",
 "Australie",
 "Autriche",
 "Azerbaïdjan"
];

let pays = document.getElementById('pays');
let suggestions = document.getElementById('suggestions');

listePays.forEach((e)=>{ 
 suggestions.innerHTML="";
 if(e.indexOf(pays.value) === 0){
  let text = document.createElement('p');
  text.setAttribute('class','suggestion');
   text.textContent += e ;
   suggestions.appendChild(text);
}
 
});

suggestions.style.display="none";

let aide = () => {
 suggestions.style.display ='block';
}

pays.addEventListener('input',aide);

window.addEventListener('click',()=>{suggestions.style.display='none';});