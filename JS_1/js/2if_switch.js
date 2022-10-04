/*-----USLOVI-( If / Switch )---*/

let prvi_broj = 5;
let drugi_broj = 10;

console.log(prvi_broj > drugi_broj);
// Dobili smo boolean tip podatka tj. true/false.
//Ali mi hocemo nesto drugo da ispisemo:
if (prvi_broj < drugi_broj) {
    console.log('Prvi broj je manji od drugog');
    }else{
        console.log('Prvi broj nije manji od drugoga');
    }

let vrijeme = 21;
if (vrijeme < 10) { 
    console.log('Dobro jutro');
    }else if (vrijeme < 20) {
        console.log('Dobar dan');
    }else{
        console.log('Dobro vece');
    }

//Postoji bolji nacin:

let mjesec = 1;

switch (mjesec) {
    case 1:
        console.log('Januar');
        break;
    case 2:
        console.log('Februar');
        break;
    case 3:
        console.log('Mart');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('Maj');
        break;
    case 6:
        console.log('Juni');
        break;
    case 7:
        console.log('Juli');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('Septembar');
        break;
    case 10:
        console.log('Oktobar');
        break;
    case 11:
        console.log('Novembar');
        break;
    case 12:
        console.log('Decembar');
        break;
}


/*-----Petlje---( while )-------*/
// 25 novcanica
let novcanice = 35;

// 10 eura vrijednost  jedne novcanice
let vrijednost_novcanice = 10;

// brojac
let izbrojane_novcanice = 0; //izbrojane novcanice

/*WHILE(mora imati brojac) broji novcanice ++
sve dok je Brojac <manji od broja novcanice ===35*/
while (izbrojane_novcanice < novcanice){
    izbrojane_novcanice++;
 // console.log(izbrojane_novcanice);mozemo da maknemo ovaj
    // odavde ispod viticaste..
}

// onda pokaze samo konacan broj;
console.log(izbrojane_novcanice);
console.log(izbrojane_novcanice*vrijednost_novcanice);



//ali sta ako su neke novcanice vrijednosti: 5, neke 10, neke 20...
//Tada imamo niz:

// sta ako u niz dodamo jos jenu novcanicu
let novcanic = [10,5,20,20,50,5,10,20];

//onda radimo sljedece:
 let broj_novcanica = novcanic.length;
// brojac
let izbrojane_novcanic = 0; //izbrojane novcanice
console.log(broj_novcanica);
//2--onda onaj console.log /prvi ispod viticaste/ maknemo

while (izbrojane_novcanic < broj_novcanica){
    izbrojane_novcanic++;
 //1--console.log(izbrojane_novcanice);mozemo da maknemo ovaj
    // odavde ispod viticaste..
}

// onda pokaze samo konacan broj;
//console.log(izbrojane_novcanic);

//3--pa ovdje napisemo novi console.log:
console.log('broj izbrojanih novcanica ' + izbrojane_novcanic);





