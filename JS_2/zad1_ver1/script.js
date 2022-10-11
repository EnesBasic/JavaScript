


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
        cijena = parseInt(cijena);
        kolicina = parseInt(kolicina);

        let total = cijena * kolicina;
        
        korpaFilmovi.innerHTML +=
        `<div class= korpa-film>
        <h3>${name}</h3>
        <p>${cijena} x ${kolicina} kom = <span>${total}</span> €</p>
        <button onclick="ukloniizKorpe(this)" class="ukloniFilm">Ukloni</button>`

        document.querySelector('.total').innerText = `total: ${alltotal} €`;

    }

};
