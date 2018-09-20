let infosLiens = (me) => {
  return document.getElementsByTagName(me);
}
console.log(infosLiens('a').length);
console.log(infosLiens('a')[0].href);
console.log(infosLiens('a')[infosLiens('a').length - 1].href);

let possede = (first, second) => {
  if (document.getElementById(first)) {
    if (document.getElementById(first).classList.contains(second)) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log("Aucun élément ne possède l\'identifiant contrebasse");
  }
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur