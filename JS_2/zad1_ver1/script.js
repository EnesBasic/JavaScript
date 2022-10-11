alltotal = 0;

function dodajuKorpu(element){

    let mainEl = element.closest('.film');
    let cijena = mainEl.querySelector('.cijena').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let kolicina = mainEl.querySelector('input').value;
    let korpaFilmovi = document.querySelector('.korpa-filmovi');

    if(parseInt(kolicina)>0){
        
        cijena = cijena.substring(1);
        console.log(typeof(cijena));
        console.log(typeof(kolicina));
        cijena = parseInt(cijena);0
        kolicina = parseInt(kolicina);

        let total = cijena * kolicina;0
        alltotal += total;

        korpaFilmovi.innerHTML +=
        `<div class= korpa-film>
        <h3>${name}</h3>
        <p>${cijena} x ${kolicina} kom = <span>${total}</span> €</p>
        <button onclick="ukloniizKorpe(this)" class="ukloniFilm">Ukloni</button>`

        document.querySelector('.total').innerText = `total: ${alltotal} €`;

        element.innerText = 'Dodato';
        element.setAttribute('disabled', true);
    }
    else{
        console.log('Odaberi kolicinu');
    }
};

function ukloniizKorpe(element){
    let mainEl = element.closest('.korpa-filmovi');
    let cijena = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let filmovi = document.querySelectorAll('.film');

    console.log(cijena);
    cijena = parseInt(cijena);
    alltotal -= cijena;
    document.querySelector('.total').innerText = `Total: ${alltotal} €`;
    mainEl.remove();
    console.log(filmovi);

    filmovi.forEach(function(filmici){
        let itemName = filmici.querySelector('.sadrzaj h3').innerText;
        if (itemName === name){
            filmici.querySelector('.akcija input').value = 0;
            filmici.querySelector('.akcija button').removeAttribute('disabled');
            filmici.querySelector('.akcija button').innerText = 'Dodaj';
        }
    });
}