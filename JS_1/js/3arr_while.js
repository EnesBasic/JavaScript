/*-----Index niza + while-------*/
// indexi-->    [ 0, 1, 2, 3, 4, 5,  6, 7, 8]
let novcanice = [10, 5,20,50, 5,10,100,20,50];

/*
console.log(novcanice[3]);
console.log(novcanice[4]);
console.log(novcanice[0]);
*/



let broj_novcanica = novcanice.length;//duzina niza
let brojac = 0; //brojac

while (brojac < broj_novcanica){
    console.log('------------------------------');
    console.log('Uslov prosao');
    console.log(`Novcanica na poziciji:[${brojac}]: ${novcanice[brojac]}`);
    brojac++;
}

 
if (brojac < broj_novcanica){
    console.log('brojac je manji');
}else{
    console.log('brojac nije manji');
}

// ili konacno rjesenje
console.log('brojac:' + brojac);







