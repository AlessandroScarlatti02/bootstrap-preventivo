console.log("Hello World!");
// Recupero Elementi dal Form
const check = document.getElementById('privacy-check')
console.log(check);
const formElement = document.getElementById('form')
console.log(formElement)
const nameElement = document.getElementById('name')
const surnameElement = document.getElementById('surname')
const emailElement = document.getElementById('email')
const jobTypeElement = document.getElementById('job-type')
const promocodeElement = document.getElementById('promo')
const errorElement = document.getElementById('error')
const priceElement = document.getElementById('price')
const decimalElement = document.getElementById('decimal')
const promoBlockElement = document.getElementById('promo-block')
const priceBlockElement = document.getElementById('price-block')

//Inclusione Flag
let promoFlag = 0
let flag

//OGETTO LAVORI
let jobs = [
    {
        name: 'Sviluppo backend',
        price: 20.50,
        value: 'b'
    },
    {
        name: 'Sviluppo frontend',
        price: 15.30,
        value: 'f'
    },
    {
        name: 'Analisi progettuale',
        price: 33.60,
        value: 'p'
    }
]
//Variabili per calcolare il prezzo
// const b = 20.50
// const f = 15.30    BONUS!!
// const p = 33.60
let basePrice = 0
let finalPrice = 0
//Ciclo per inserire i lavori nell'html
for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    jobTypeElement.innerHTML += `<option value="${job.value}">${job.name}</option>`
    console.log("inserito");
}

formElement.addEventListener('submit', function (event) {
    // blocca invio del form
    event.preventDefault()
    console.log('submit del form')
    flag = 0
    nameElement.classList.remove('is-valid', 'is-invalid')
    surnameElement.classList.remove('is-valid', 'is-invalid')
    emailElement.classList.remove('is-valid', 'is-invalid')
    jobTypeElement.classList.remove('is-valid', 'is-invalid')
    promocodeElement.classList.remove('is-valid', 'is-invalid')
    check.classList.remove('is-valid', 'is-invalid')
    // Controllo Nome
    const name = nameElement.value
    if (name.length >= 3) {
        nameElement.classList.add('is-valid')
    }
    else {
        nameElement.classList.add('is-invalid')
        flag++
    }
    // Controllo Cognome
    const surname = surnameElement.value
    if (surname.length >= 3) {
        surnameElement.classList.add('is-valid')
    }
    else {
        surnameElement.classList.add('is-invalid')
        flag++
    }
    // Controllo Email
    const email = emailElement.value
    let emailFlag = 0
    for (let i = 0; i < email.length; i++) {
        const element = email[i];
        if (element === '@') {
            emailFlag++
        }
    }
    if (email.length > 5 && emailFlag != 0) {
        emailElement.classList.add('is-valid')

    }
    else {
        emailElement.classList.add('is-invalid')
        flag++
    }
    // Controllo job
    const jobValue = jobTypeElement.value
    if (jobValue === '0') {
        jobTypeElement.classList.add('is-invalid')
        flag++
    }
    else {
        jobTypeElement.classList.add('is-valid')
        console.log(jobValue)
    }
    // Controllo Promocode
    const promo = promocodeElement.value
    if (promo == 'YHDNU32' || promo == 'JANJC63' || promo == 'PWKCN25' || promo == 'SJDPO96' || promo == 'POCIE24') {
        promocodeElement.classList.add('is-valid')
        promoFlag = 0
        console.log("promotrue")
    }
    else {
        promocodeElement.classList.add('is-invalid')
        promoFlag++
        console.log("promofalse")
    }
    // Controllo Privacy Check
    if (check.checked == true) {
        console.log("Check true");
    }
    else {
        check.classList.add('is-invalid')
        flag++
    }
    //Controllo Se sono stati trovati errori nella compilazione del form e stampa del relativo messaggio
    if (flag > 0) {

        errorElement.innerHTML = `<p class="d-flex justify-content-center fw-bold" style="color: red;">
                            Controlla gli errori evidenziati in rosso!!</p>`
    }
    else {
        errorElement.innerHTML = `<p class="d-flex justify-content-center fw-bold" style="color: green;">
                            Tutti i campi sono stati compilati correttamente!!</p>`
        //Controllo quale tra i 3 lavori sono stati scelti e calcolo del prezzo base
        for (let i = 0; i < jobs.length; i++) {
            const job = jobs[i];
            if (job.value == jobValue) {
                basePrice = job.price * 10
            }

        }

        // Controllo Se è stato inserito un promocode corretto
        if (promoFlag === 0) {
            const discount = (basePrice * 25) / 100
            // Calcolo del prezzo scontato e stampa
            finalPrice = basePrice - discount
            finalPrice = finalPrice.toFixed(2)
            priceBlockElement.classList.add("text-decoration-line-through")
            promoBlockElement.innerHTML = `<p class="fw-bold fs-3 m-0" style="color: red;">Prezzo Scontato !!</p>
                                <p class="fw-bold fs-3 m-0 justify-content-center d-flex text-decoration-underline"
                                    style="color: red;">€ <span>${finalPrice}</span></p>`
        }
    }
    //Stampa del prezzo finale
    priceElement.innerHTML = basePrice
    decimalElement.innerHTML = "00"
    // console.log(basePrice)
    // console.log(flag);

})