/*----TRADICIONALNI nacin pravljenja funkcija u JS-u---*/

function klikni_me(){
    let a = 5;
    let b = 10;
    console.log(a+b);
}

klikni_me();

/*----NOVI Nacin---se zove ARROW FUNCTION--------------*/

const klikni_me_nova = () => {
    let a = 15;
    let b = 20;
    console.log( a + b );
}

klikni_me_nova();

/*----Treci nacin -------------------------------------*/

function klikni_me1( a , b ){// ako imamo funkciju koja ima liniju  
    //let a = 5;             // mozemo bez viticastih zagrada
    //let b = 10;
    console.log( a + b );
}

klikni_me1(80,15);

/*----Cetvrti nacin -----------------------------------*/
const klikni_me_nova1 = b => { // ako imamo jedan argument
    let a = 10;                // mozemo bey zagrada
  //let b = 20;
    console.log( a + b );
}

klikni_me_nova1(20);











