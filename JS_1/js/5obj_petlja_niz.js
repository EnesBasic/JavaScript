/*-OBJEKTI = naprednije varijable--*/
/*-----Objekti + petlja + niz------*/

let automobili = 
{
Audi:['70000','2017','q7'],
bmw:['50000','2018','330d'],
porcshe:['60000','2016','boxter'],
mercedes:['100000','2019','s400'],
};

//console.log(automobili);

//Da prenesemo sad ovo u neku petlju i da to lijepo ispisemo:
for(automobil in automobili){
    console.log(automobil);
    console.log(automobili[automobil]);
    console.log('---------------------');
}

/* ali sta mi sad mozemo, 
mozemo napraviti jos jednostavnije
napravimo novu varijablu i nju pozovemo*/

for(automobil in automobili){
    let naziv = automobil;
  //console.log(naziv);
    let podaci_vozila = automobili[automobil];
  
    /*  
    console.log(podaci_vozila[0]); cijena
    console.log(podaci_vozila[1]); godiste
    console.log(podaci_vozila[2]); model
  */

    console.log(`${naziv}:
        model: ${podaci_vozila[2]},
        godiste: ${podaci_vozila[1]},
        cijena: ${podaci_vozila[0]} eura.`);
}

/*--Nacin da im pojedinacno pristupimo---*/

console.log('########################################');

console.log(automobili['porcshe']);
//ili
console.log(automobili.Audi);
console.log(automobili.bmw);


/*--Novi primjer----------*/
let osoba = {
    ime:'Cysecor',
    prezime:'Sigurnost',
    godine:15,
    grad:'Peking'
};

console.log(
    `Ime: ${osoba.ime},
    Prezime: ${osoba.prezime},
    Godine: ${osoba.godine},
    Grad: ${osoba.grad}`
    );
