let desserts = document.getElementById('desserts');

let button = document.querySelector('button');
button.addEventListener('click',()=>{
 let input = prompt('Entrez le dessert à ajouter');
 let listItem = document.createElement('li');
 listItem.textContent = input;
 listItem.addEventListener('click',(e)=>{
  let newValue = prompt('Modifiez ce dessert',e.target.textContent);
  e.target.textContent = newValue;
 });

 desserts.appendChild(listItem);
});