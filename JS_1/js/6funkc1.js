/*---------FUNKCIJE 2----------------*/
function racunanje_mjesecne_rate(godine, vrsta_nekretnine){
     console.log(godine);
     console.log(vrsta_nekretnine);
}

racunanje_mjesecne_rate(15,'kuca');


let nekretnine = 
{
    stan:'70000',
    kuca:'150000',
    plac:'30000'
};













//Ovaj dole kod se ponavlja(s malim izmjenama), a ima pravilo NOREPEAT CODE
let godine = 10;
let mjeseci = godine*12;
let rata = nekretnine.stan / mjeseci;
rata = rata.toFixed(2);

//console.log(rata.toFixed(2));    
//---------------------------
// STAN ---------------------


console.log(mjeseci + ' mjeseci.');
console.log(rata + ' eura.');
console.log(`Mjesecna rata za stan iznosi: ${rata} na ${godine} godina`);

//---------------------------
// PLAC ---------------------

godine = 5;
mjeseci = godine*12;
rata = nekretnine.plac / mjeseci;

console.log('----------------');

console.log(mjeseci + ' mjeseci.');
console.log(rata + ' eura.');
console.log(`Mjesecna rata za plac iznosi: ${rata} na ${godine} godina`);


//---------------------------
// KUCA ---------------------

godine = 20;
mjeseci = godine*12;
rata = nekretnine.kuca / mjeseci;

console.log('----------------');

console.log(mjeseci + ' mjeseci.');
console.log(rata + ' eura.');
console.log(`Mjesecna rata za kucu iznosi: ${rata} na ${godine} godina`);


