/* Malo manipulacije nad stringovima 
 mai kao primjer, ovo nije nacin validacije*/
/*
 function validacija(){
    let input = document.querySelector('#email');
    let value = input.value;

    if((value.includes('@')) && (value.includes('.'))){
        console.log(value.substring(0, 5));// 5-ti ne ukljucuje
        //console.log(value.substring(1, 5));// 1-vi ne ukljucuje
    }else{
        console.log('NE sadrzi @ ili .')
    }
}
*/
/* Ali kako cemo mi dobiti poziciju znaka @ i znaka .    : 

 function validacija(){
    let input = document.querySelector('#email');
    let value = input.value;

    if((value.includes('@')) && (value.includes('.'))){
        console.log(value.indexOf('@'));
        console.log(value.indexOf('.'));
    }else{
        console.log('NE sadrzi @ ili .')
    }
}

/* sada mi pomoci ovoga indexOf i komande substring mozemo
da nademo sta se nalazi izmedu toga dvoje 

function validacija(){
    let input = document.querySelector('#email');
    let value = input.value;

    if((value.includes('@')) && value.includes('.')){
        let pozicijaAt = value.indexOf('@');
        let pozicijaTacka = value.indexOf('.');
        //Ovako smo definisali ds ima nesto izmedju et i tacke:
        let izmedjuAtTacka= value.substring(pozicijaAt + 1, pozicijaTacka);
        //console.log(izmedjuAtTacka.length); 
       // console.log(value.substring(pozicijaAt,pozicijaTacka));
/* znaci on ukljucuje ovu prvu poziciju ali ne i zadnju
ako hocemo i ovo et da iskljucimo onda samo upisemo +1 
        
    //console.log(value.substring(pozicijaAt + 1, pozicijaTacka));

        if(izmedjuAtTacka.length > 0) {      
            console.log('Dobro je');
        }else {
            console.log('Nije dobro');
        }
   
    }else{
        console.log('NE sadrzi @ ili .')
    }
}
*/


/*a sad da definisemo da ima makar tri karaktera prije et i dva poslije tacke */


function validacija(){
    let input = document.querySelector('#email');
    let value = input.value;

    if((value.includes('@')) && value.includes('.')){
        let pozicijaAt = value.indexOf('@');
        let pozicijaTacka = value.indexOf('.');
        
        let prijeAt = value.substring(0, pozicijaAt);
        let posTacka = value.substring(pozicijaTacka + 1, value.length);
        let izmedjuAtTacka= value.substring(pozicijaAt + 1, pozicijaTacka);
        //Ovako smo definisali ds ima nesto izmedju et i tacke:
            if(izmedjuAtTacka.length > 0) {      
                console.log('izmedju tacke Dobro je');
                }else{
                console.log('izmedju tacke Nije dobro');
                }




            if(prijeAt.length > 2){
                console.log('prije AT Dobro je');
            }else{
            console.log('prije AT Nije dobro');
            }



            if((posTacka.length > 1) && (posTacka.length < 4)) {
                console.log('poslije tacke Dobro je');
            }else{
                console.log('poslije tacke Nije dobro');  
              
            }

        }else{
        console.log('NE sadrzi @ ili .')
    }

// cysecor@gmail.com
}