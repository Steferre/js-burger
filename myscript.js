// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

// recupero i valori dei campi che l'utente deve compilare oppure scegliere tramite le checkbox

var userBurgerName = document.getElementById('name');
console.log(userBurgerName);
//var userCouponCode = document.getElementById('coupon');
//console.log(userCouponCode);
// per i valori scelti tramite le checkbox posso procedere sia singolarmente, sia con il queryselector

var cheeseOption = document.getElementById('cheese-add');
var tomatoOption = document.getElementById('tomato-add');
var eggOption = document.getElementById('egg-add');
var lettuceOption = document.getElementById('lettuce-add');
var mustardOption = document.getElementById('mustard-add');
var ketchupOption = document.getElementById('ketchup-add');

// essendo tutti degli html element posso usare la proprietà .value per vederne il valore
// esempio se faccio console.log(tomatoOption.value); esce 2 che è il valore impostato in html per quel ingrediente
// per non scrivere tutti gli ingredienti singolarmente, posso usare

var ingredientsOption = document.querySelectorAll("input[class^='ingredient']"); 
// tramite il selettore prendo tutti gli elementi input che hanno una classe che inizia con la parola chiave ingredient
console.log(ingredientsOption);
// ottengo un NodeElementList che posso trattare come se fosse un "array" anche se non possiede tutte le proprietà di un vero array
// ma per ottenere per esempio i valori posso realizzare un ciclo, senza dover scrivere singolarmente le voci

// in base a ciò che è richiesto devo quindi capire prima di tutto quali sono gli ingredienti scelti dall'utente
// ed in base a quello aggiungere il prezzo "value", di quelli scelti, al prezzo base di 50 dollari
// una volta cliccato calculate il programma mi dovrà fornire il prezzo aggiornato
/* 
// definisco la variabile prezzo base alla quale poi andrò a sommare i prezzi delle aggiunte fatte dall'utente
var basePrice = 50;
// faccio un ciclo for sulla NodeList

for (var i = 0; i < ingredientsOption.length; i++) {

    // definisco una variabile che seleziona gli ingredienti scelti dall'utente
    var ingredientUserChoise = ingredientsOption[i];

    // tramite la proprietà .checked vado a capire se l'utente ha selezionato o meno l'ingrediente
    // infatti ingredientUserChoice.checked mi fornisce come risposta un valore booleano 
    // questo valore posso usarlo per la validazione e per capire quali elementi vanno considerati come aggiunte al prezzo base
    
    // quindi => se .checked mi ritorna un vero entro nell'if e faccio in modo di aggiungere il valore di quel prodotto al prezzo base

    if (ingredientUserChoise.checked) {
        basePrice += ingredientUserChoise.value // che sarebbe come scrivere che il nuovo prezzo base sarebbe 50 + il valore dell'ingrediente
    }
    
    // nel caso .checked ritornasse falso, non si entrerebbe nell'if e non avviene la somma del valore di quell'ingrediente

}
*/
// devo creare un evento che mi permetta di attivare questa serie di funzionalità
// quindi aggiungo un click al bottone calculate e metto il for dentro a questo evento

var btnCalculate = document.getElementById('button');
var basePrice = 50;

var availablePromoCodes = ['A9B8C7D6E5', 'F4G3H2I1L0', 'M9N1O5P3Q7'];
console.log(availablePromoCodes);


btnCalculate.addEventListener('click', function() {

    for (var i = 0; i < ingredientsOption.length; i++) {

        var ingredientUserChoise = ingredientsOption[i];
    
        if (ingredientUserChoise.checked) {
            basePrice += parseInt(ingredientUserChoise.value);

        }
    
    }

    var discountPrice;

    console.log(basePrice);
    

    var userCouponCode = document.getElementById('coupon').value;
    console.log(userCouponCode);

    for (j = 0; j < availablePromoCodes.length; j++) {
        /*
        if(userCouponCode === availablePromoCodes[j]) {
          
            discountPrice = basePrice - ((basePrice * 25) / 100);
            document.getElementById('price').innerText= discountPrice;
        } else {

            document.getElementById('price').innerText= basePrice;

        }*/

        addDiscountCoupon(userCouponCode, availablePromoCodes[j]);


    }

    

})
// definisco un array con all'interno dei coupon sconto validi




// FUNZIONI

// devo creare una funzione che controlla se il codice coupon è valido applica lo sconto del 25%
// in caso contrario non altera il prezzo 

function addDiscountCoupon(couponCode, availableCode) {

    if(couponCode === availableCode) {
  
        discountPrice = basePrice - ((basePrice * 25) / 100);

        return discountPrice;
        //document.getElementById('price').innerText= discountPrice;
    } else {

        return basePrice;
        //document.getElementById('price').innerText= basePrice;
    }

}







