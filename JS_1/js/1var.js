/*console.log(5===6)
console.error('iz konzole')
console.warn('iz konzole')*/

document.write('Podrav sa stranice')

/*window.alert('iz pozdrav iz popup-a')

open()
window.open()*/

//console.log('test');
document.getElementById('poruka').innerText = 'Cao!!!!';

/*-----VARIJABLE-----*/

let cysecor; 
cysecor = 'subscribe na moj kanal';
console.log('cysecor!!!!!!!!!!!');


/*-----Deklaracija--=--Inicijalizacija-----*/
let cysecor_broj_subs='Cysecor ima 45k subs';
console.log(cysecor_broj_subs);
console.log(typeof(cysecor_broj_subs));//ispisuje tip podatka



let godine = 5.1;
let mjesec = 3;
console.log(godine);//ispisuje varijablu godine
console.log(mjesec);//ispisuje varijablu mjesec


/*---ovo sabira------------------------*/
let rezultat = godine + mjesec;
console.log(rezultat);
console.log(typeof(godine));//ispisuje tip podatka
console.log(typeof(mjesec));
console.log(typeof(rezultat));

/*---ovo ispisuje jedno pored drugog---*/
let gdine = 5;
let misec = '3';//jer zbog navodnika ga ne vidi kao broj
let rezultat2 = gdine + misec;
console.log(rezultat2);


let neki_broj = 65;
let drugi_broj ='5';

console.log(typeof(drugi_broj));
drugi_broj = parseInt(drugi_broj);//pretvaramo string u broj
console.log(typeof(drugi_broj));//sad drugi_broj nije vise string,
// nego je sada broj, tj. tip podatka INTeger

let rezultat3 = neki_broj + drugi_broj;// da bi izvrsili sabiranje
console.log(rezultat3);


/*---Hocemo da im zamijenimo mjesta----*/
let treci_broj = 5;
let cetvrti_broj = 10;

console.log('Prvi broj je: '+treci_broj);//ispisuje varijablu treci_broj
console.log('Drugi broj je: '+cetvrti_broj);//ispisuje varijablu cetvrti_broj

/*Ovako necemo moci
console.log(treci_broj = cetvrti_broj);
console.log(cetvrti_broj = treci_broj);
*/
// Zato zadamo jos jednu varijablu
let treci_broj_tmp;

// ovje pisemo logiku tj. zamjenu
treci_broj_tmp = treci_broj;
treci_broj = cetvrti_broj;
cetvrti_broj = treci_broj_tmp;

console.log('Prvi broj je: '+treci_broj);
console.log('Drugi broj je: '+cetvrti_broj);

const peti_broj = 5;
const sesti_broj = 15;
// const ne mozemo tek tako mijenjati
//sesti_broj = peti_broj;
//console.log(sesti_broj);

// let 1broj === Naziv Varijble ne mozemo pocinjati sa brojem
// let prvi broj === ne moze biti prazan prostor(whitespace)
// let (broj === ne moze sa zagradom
// let _broj === mozemo sa donjom crtom
// let $broj === mozemo sa dolarom
// let $prvi_$$broj === moze i izmedju
//JAVASCRIPT je osjetljiv na mala i velika slova
// let prvibroj = 5;
// console.log(prviBroj); GRESKA SINTAKSNA

let ime = 'Enes'
let prezime = 'Basic';
let god = 18;

console.log(ime);
console.log(prezime);
console.log(god);

let recenica = 'Ja sam ' + ime + ' imam ' + god + ' godina.';

console.log('Ja sam ' + ime + ' imam ' + god + ' godina.');// 1 nacin
console.log(recenica);                                     // 2 nacin


console.log('Ove godine imam ' + god + ' godina.');
//god = god + 1;
//ili 
god++ ;
console.log('Sljedece godine  cu imati ' + god + ' godina.');

god--
god -= 1;
// ako hocemo da vidimo prosle godine koliko sam imao
console.log('Prosle godine sam imao ' + god + ' godina.');

// Za dvije godine cu imati 
//god = god + 2;
god += 3;

console.log('Sljedece godine  cu imati ' + god + ' godina.');

// Ali ima bolji nacin od ovoga sa tik navodnicima
let recenica1 = `Ja sam ${ime} imam ${god} godina`;
console.log(recenica1);


/*-----Logicki Operatori-----*/

let sedmi_broj = 7;
let osmi_broj = 4;

let deveti_broj = 7;
let deseti_broj = 11;

console.log(sedmi_broj > osmi_broj);
console.log(deveti_broj > deseti_broj);

// samo ako su obadva iskaza tacna pokazao bi tacno
console.log((sedmi_broj > osmi_broj) && (deveti_broj > deseti_broj));

// ako je bar jedan tacan pokazace tacno/true
console.log((sedmi_broj > osmi_broj) || (deveti_broj > deseti_broj));

// ako su je oba NEtacna pokazace false/laz
console.log((sedmi_broj < osmi_broj) || (deveti_broj > deseti_broj));
























































