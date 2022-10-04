/*--Petlje--( for / foreach )---*/

let novcanice = [10, 5,20,50, 5,10,100,20,50];
let broj_novcanica = novcanice.length;//duzina niza
let ukupno_novca = 0;

/* ovo je old school
for(let brojac = 0; brojac < broj_novcanica; brojac++)
/*------------------------------------------------------*/
//Ovo je napredniji nacin: 
for(let brojac in novcanice){
    console.log(novcanice[brojac]);
    ukupno_novca = ukupno_novca + novcanice[brojac];
}

console.log("###KRAJ PETLJE###");
console.log(`Ukupno imamo: ${ukupno_novca} eura`);
/*------------------------------------------------------*/
// A ima jos jednostavniji nacin od ovoga gore:

let novci = [10, 5,20,50, 5,10,100,20,50];
for(let novac of novci){
    console.log(novac);
}

// Drugi primjer

let automobili= ['Audi','BMW','VW','Porcshe','Mercedes'];
for(let automobil of automobili){
    console.log(automobil);
} 
/*------------------------------------------------------*/
// A ima i Treci jos laksi nacin sa foreach petljom:

let Automobili= ['Audi','BMW','VW','Porcshe','Mercedes'];
Automobili.forEach(function(Automobil){
    console.log(Automobil);
});

















