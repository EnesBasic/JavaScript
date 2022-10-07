
function dodajuKorpu(){

    let mainEL = element.closest('.sadrzaj');
    let cijena = mainEL.querySelector('cijena').innerText;
    let ime = mainEL.querySelector('h3').innerText;
    let kolicina = mainEL.querySelector('input').value;
    let korpaFilmovi = document.querySelector('.korpaFilmovi');

    if(parseInt(kolicina)>0){
        
        cijena = cijena.substring(1);
        console.log(typeof(cijena));
        console.log(ime);
        console.log(korpaFilmovi);

    }















};