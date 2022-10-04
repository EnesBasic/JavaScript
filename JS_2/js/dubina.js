/* Pozivanje po dubini 

/* ako hocemo drugi a element da izaberemo onda pozivamo
1) section
2) .moj-link
*/

function testing(){
    console.log('Test');
    let linkovi =   document.querySelectorAll('section .moj-link');
    console.log(linkovi[0].innerText);
}
/* Ako hocemo recimo treci a element pozivamo redom 
1) .galvni-div
2) .inner-div
3) .moj-link
*/

function testing(){
    let linkovi =   document.querySelectorAll('.glavni-div .inner-div .moj-link');
    console.log(linkovi[0].innerText);
}

 /* Ako bi htjeli da pozovemo prvi a element
1) .glavni-div
2)  span 
3) .moj-link
*/

function testing(){
    let linkovi =   document.querySelectorAll('.glavni-div span .moj-link');
    console.log(linkovi[0].innerText);
}


