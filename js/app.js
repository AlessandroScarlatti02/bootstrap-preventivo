console.log("Hello World!");

const check = document.getElementById('privacy-check')
console.log(check);
const formElement = document.getElementById('form')
console.log(formElement)
const nameElement = document.getElementById('name')
const surnameElement = document.getElementById('surname')
const emailElement = document.getElementById('email')
const jobTypeElement = document.getElementById('job-type')
const promocodeElement = document.getElementById('promo')


let flag


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
    const emailFlag = 0
    for (let i = 0; i < email.length; i++) {
        const element = email[i];
        if (element === '@') {
            emailFlag++
        }
    }
    if (email.lenght > 5 && emailFlag != 0) {
        emailElement.classList.add('is-valid')

    }
    else {
        emailElement.classList.add('is-invalid')
        flag++
    }
    // Controllo job
    const job = jobTypeElement.value
    if (job == '0') {
        jobTypeElement.classList.add('is-invalid')
        flag++
    }
    else {
        jobTypeElement.classList.add('is-valid')
        console.log(job)
    }
    // Controllo Promocode
    const promo = promocodeElement.value
    if (promo.lenght != 7) {
        promocodeElement.classList.add('is-invalid')
        flag++
    }
    else {
        promocodeElement.classList.add('is-valid')
    }
    // Controllo Privacy Check
    if (check.checked == true) {
        console.log("Check true");
    }
    else {
        check.classList.add('is-invalid')
        flag++
    }


    console.log(flag);

})