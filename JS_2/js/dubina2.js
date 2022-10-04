/* Pozivanje po dubini 

/* ako hocemo drugi a element da izaberemo onda pozivamo
1) section
2) .moj-link
*/
// Na osnovu (onog u zagradi tj. drugog linka) dobijemo drugi link
function testing(){
    let link =   document.querySelector('.drugi-link');
    console.log(link);

}

// a sad da vidimo kako na osnovu drugog linka dobijemo prvi i treci link

function testing(){
    let link2 = document.querySelector('.drugi-link');
    let link1 = link2.previousElementSibling;
    let link3 = link2.nextElementSibling;

    console.log(link1.innerText);
    console.log(link2.innerText);
    console.log(link3.innerText);

}

// Sta cemo dobiti ako uradimo sljedece:

function testing(){
    let link2 = document.querySelector('.drugi-link');
    console.log(link2.closest('div'));//najblizi element
}


/* Ovako mijenjamo atributr elementa
Hajde da probamo da ovom linku nesto dodamo: */

function testing(){
    let link4 = document.querySelector('.drugi-link');
    link4.setAttribute('href', 'https://www.google.com');
    console.log(link4);
}

/* Da vidimo kako mozemo da uzmemo atribute elementa:
dakle dobili smo vrijednost atributa data-test sto je testing */

function testing(){
    let link = document.querySelector('.drugi-link');
    console.log(link.getAttribute('data-test'));
}

/* Ako hocemo da maknemo(eliminisemo) atribut elementa:
dakle eliminisali smo vrijednost atributa data-test sto je testing 
*/

function testing(){
    let link = document.querySelector('.drugi-link');
    link.removeAttribute('data-test');
    link.removeAttribute('class');// ako zelimo i klas da uklonemo
}

/* kako mozemo u neki div da upisemo HTML:
ovo nije kacin da se nesto doda,
# pravi nacin je createElement i appendChild */

function testing(){
    let gl_div = document.querySelector('.glavni-div');
    //gl_div.innerHTML = '<hr>'//hajde da napisemo jos nesto
    gl_div.innerHTML = '<span>Klikni ovaj link:<a href="#">klik</a></span>';

}




















