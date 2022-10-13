/*-----koje evente/dogadjaje mozemo imati na web stranici---------
1.) klik 
2.) kad nesto pristisnemo na tastaturi
3.) scroll
4.) hover
5.) submit
6.) change
7.) resize
----------------------------------------------------------------*/

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
