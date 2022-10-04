/*--brisanje iz index.HTML prko JS-*/

let recenica = document.querySelector('#recenica');
recenica.remove();// remove sluzi za brisanje

//Kreiranje novog DIV elementa
let novi_el = document.createElement('div');
novi_el.classList = 'novi_element';// dodajemo klasu
//novi_el.innerHTML = '<hr>'; // dodajemo HTML i tekst
novi_el.innerHTML = '<hr>Merhaba';
//console.log(novi_el);
let body = document.querySelector('body'); // Selektujemo body
body.appendChild(novi_el); // na kraju body-a dodajemo nas tekst




