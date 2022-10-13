/*-----koje evente/dogadjaje mozemo imati na web stranici---------
1.) klik 
2.) kad nesto pristisnemo na tastaturi
3.) scroll
4.) hover
5.) submit
6.) change
7.) resize
----------------------------------------------------------------

const klikni_me = (dugme) => {
    console.log(dugme.innerText);
}

let btns = document.querySelectorAll('button');


btns.forEach(function(btn) {

    //Event listener koji ceka klik za svaki button
    btn.addEventListener('click',function(event) {
        //console.log(event.target);
        let clicked_btn = event.target;
        console.log(clicked_btn.innerText);
    });
});

let link = document.querySelector('#link');
link.addEventListener('click',(event) => {
    event.preventDefault();// ako hocemo da sprijecimo defaultno ponasanje
    console.log(event.target);
    });

/*-----konkretan primjer -----------------------------------------------*/

    let form = document.querySelector('form');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log('test');
    });

/*-----select i resize -------------------------------------------------*/

let opcije = document.querySelector('select');
opcije.addEventListener("change", (event) => {
    console.log(event.target.value);
});

window.addEventListener("resize", () => {
    //console.log(window.innerWidth);
    if(innerWidth > 300){
        console.log('prozor veci od 500')
    }else{
        console.log('prozor manji od 500');
    }
});


let input = document.querySelector('input');
input.addEventListener("keydown", (event)=> {
    if(event.key === 'Delete'){        
        alert('Obrisao si nesto');
    }
});

/*-----detektovanje pomjeranje misa unutar cijelog prozora-------------------*/

window.addEventListener("mousemove", (event)=>{
    console.log('mis pomjeren');
});

/*-----detektovanje pomjeranje misa unutar samo input polja------------------*/


input.addEventListener("mousemove", (event)=> {
    console.log('mis pomjeren');

});