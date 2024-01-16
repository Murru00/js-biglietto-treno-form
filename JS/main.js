// DATI UTENTE
const usernameInput = document.getElementById('userName');
const userkmInput = document.getElementById("userKm");
const userageInput = document.getElementById('userAge');
const finalPrice = document.getElementById('finalPrice');
const PrintButtonInput = document.getElementById('PrintButton');
const buttonCancel = document.getElementById('DeleteButton');


const printUser = document.getElementById('printUser');
const table = document.getElementById('table');



// BOTTON
PrintButtonInput.addEventListener('click', function () {
    const username = usernameInput.value;
    console.log(username);

    const userkm = parseInt(userkmInput.value);
    console.log(userkm);

    const userage = userageInput.value;
    console.log(userage);

    // BIGLIETTO
    const basePrice = userkm * 0.21;
    console.log(basePrice);

    // SCONTO % MINORENNE
    if (userage == "minorenne") {
        document.getElementById('discount').innerText = "Offerta 20%";
        let price = basePrice;
        const discountperc = 20;
        const discount = price * discountperc / 100;
        finalprice = price - discount;
        console.log(finalprice);

        // SCONTO % OVER65
    } else if (userage == "over65") {
        document.getElementById('discount').innerText = "Offerta 40%";
        let price = basePrice;
        const discountperc = 40;
        const discount = price * discountperc / 100;
        finalprice = price - discount;
        console.log(finalprice);

        // tariffa base
    } else {
        document.getElementById('discount').innerText = "Tariffa Base";
        finalprice = basePrice;
        console.log(finalprice);

    }
    printUser.innerText = usernameInput.value;

    finalPrice.innerText = finalprice.toFixed(2);



    // CARROZZA RANDOM
    document.getElementById('carrozza').innerText = Math.floor(Math.random() * 10 + 1);



    // CODICE BIGLIETTO RANDOM
    document.getElementById('CodiceCP').innerText = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

    table.classList.remove('d-none');
});

// SCOMPARSA DEL BOTTONE
buttonCancel.addEventListener('click', function () {
    table.classList.add('d-none');

});