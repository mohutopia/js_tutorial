let tableauxElt = document.getElementById('tableaux');
ajaxGet('data/tableaux.json',function(res){
 let tableaux = JSON.parse(res);
 tableaux.forEach(element => {
  let ligneElt = document.createElement('tr');
  ligneElt.innerHTML = "<td>"+element.nom+"</td>"+"<td>"+element.annee+"</td>"+"<td>"+element.peintre+"</td>";
  tableauxElt.appendChild(ligneElt);
 });
});