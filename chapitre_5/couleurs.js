var para = document.querySelectorAll('div');

let couleur = '';
document.addEventListener('keypress', function (e) {
 if (String.fromCharCode(e.charCode) === 'r' || String.fromCharCode(e.charCode) === 'R') {
  couleur = 'red';
 } else if (String.fromCharCode(e.charCode) === 'j' || String.fromCharCode(e.charCode) === 'J') {
  couleur = 'yellow';
 } else if (String.fromCharCode(e.charCode) === 'v' || String.fromCharCode(e.charCode) === 'V') {
  couleur = 'green';
 } else if (String.fromCharCode(e.charCode) === 'b' || String.fromCharCode(e.charCode) === 'B') {
  couleur = 'white';
 } // else {
 //  console.log('Ce n\'est pas une option');
 // }
 for (let i = 0; i < para.length; i++) {
  para[i].style.backgroundColor = couleur;
 }
});