let allTotal = 0;

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');


    if(parseInt(quantity) > 0){

        price = price.substring(1);//znaci moramo ukoliniti onaj znak $     
        console.log(typeof(price));
        console.log(typeof(quantity));
        quantity = parseInt(quantity);//a zatim pretvoriti 10 u integer
        price = parseInt(price);//a zatim pretvoriti 10 u integer(nova varijabla da nam je lakse kasnije)
        console.log(typeof(price));// pretvoreno
        console.log(typeof(quantity));// pretvoreno

        let total = price * quantity;// e sad mozemo ovako mnoziti
        //console.log(total);
        allTotal += total;

        cartItems.innerHTML += 
        `<div class="cart-single-item">
            <h3>${name}</h3>
            <p>€${price} x ${quantity} kom = <span>${total}</span> €</p> 
            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
        </div>`

        
/* ali gore cemo malo ljepse ovo napraviti da izgleda 
        cartItems.innerHTML += `Proizvod: ${name} -
                                Cijena: ${price} -
                                Kolicina: ${quantity}
                                Total: ${total} <br>`;
A ovde dole hocemo da dodam na kraj total */
        document.querySelector('.total').innerText = `Total: ${allTotal} € `;



        element.innerText = 'Dodato';
        element.setAttribute('disabled', true);
    }else{
        console.log('Odaberi kolicinu');
    }
}


function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    console.log(price);
    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: ${allTotal} € `;
    mainEl.remove();
    console.log(vegetables);

    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
    });
    
    
    
}
    




