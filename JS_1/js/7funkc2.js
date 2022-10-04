/*---------FUNKCIJE 2----------------*/

let nekretnine = 
{
    stan:70000,
    kuca:150000,
    plac:30000
};
// Proracun za stan na 15 godina
racunanje_mjesecne_rate(15,'stan');
// Proracun za Plac na 5 godina
racunanje_mjesecne_rate(5,'plac');
// Proracun za Kucu na 20 godina
racunanje_mjesecne_rate(20,'kuca');




/*
Ova funkcija izracunava mjesecnu nekretninu 
*/
function racunanje_mjesecne_rate(godine, vrsta_nekretnine){
    //console.log(godine);
    //console.log(vrsta_nekretnine);
    let mjeseci = godine * 12;
    let rata = nekretnine[vrsta_nekretnine]/mjeseci;
  //console.log(rata);// zelimo ovo na dvije decimale
    rata = rata.toFixed(2);
    //console.log(rata);


    console.log("---------------------------------");
    //console.log(mjeseci + ' mjeseci.'); //Ovo nam vise ne treba
    //console.log(rata + ' eura.'); //Ovo nam vise ne treba
    console.log(`Mjesecna rata za ${vrsta_nekretnine} iznosi: ${rata} eura na ${godine} godina`);
}





