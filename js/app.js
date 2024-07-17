console.log("Hello World!");

const check = document.getElementById('privacy-check')
console.log(check);
const formElement = document.getElementById('form')
console.log(formElement)

formElement.addEventListener('submit', function (event) {
    // blocca invio del form
    event.preventDefault()
    console.log('submit del form')

    if (check.checked == true) {
        console.log("true");
    }
})