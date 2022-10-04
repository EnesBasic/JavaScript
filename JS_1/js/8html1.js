/*-----------HTML------------------*/

let brend = document.getElementsByTagName('span');
/*
console.log(brend[0].innerText);
console.log(brend[1].innerText);
console.log(brend[2].innerText);
*/
for(let auto of brend){
    console.log(auto.innerText);
}

console.log('================================');
 
let modeli = document.getElementsByClassName('automobil-model');

for(let model of modeli){
    console.log(model.innerText);
}

console.log('================================');
let najbolji =  document.getElementById('recenica');
console.log(najbolji.innerText);
console.log('================================');
// Sta ako hocemo sve ovo da bude unutar jedne funkcije:
brend = document.querySelectorAll('span');
//console.log(brend);

for(let auto of brend){
    console.log(auto.innerText);
}
console.log('================================');
let modelli = document.querySelectorAll('.automobil-model');
console.log(modelli);

for(let modell of modelli){
    console.log(modell.innerText);
}

console.log('================================');

let recenica = document.querySelector('#recenica');
console.log(recenica.innerText);

console.log('================================');










