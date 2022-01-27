"use strict";

/*-----------------------------
    Popup form
-----------------------------*/

const form = document.getElementById('form');
const popUp = document.getElementById('popUp')
const overlay = document.getElementById('overlay')
const close = document.getElementById(`close`);

console.log(popUp);

popUp.addEventListener(`click`, () => {
    form.classList.toggle('visible');
    overlay.classList.toggle('visible');
})

close.addEventListener(`click`, () => {
    form.classList.remove('visible');
    overlay.classList.remove('visible');
})

document.addEventListener('keydown', (event) => {
    if(event.key==`Escape`){
        form.classList.remove('visible');
        overlay.classList.remove('visible');
    }
})

/*-----------------------------
    Form Validation
-----------------------------*/


const $form = document.querySelector('form');
const $firstName = document.getElementById('first-name');
const $lastName = document.getElementById('last-name');
const $email = document.getElementById('email');
const $textArea = document.getElementById('message');
const $submit = document.getElementById('submit');

$submit.addEventListener('click', ()=> {

    let emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let textArea = $textArea.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid  = true;
    let count = 0;


    if(firstName == ''){
        message += 'First name is required\n';
        valid = false;
        count++;
    }

    if(lastName ===''){
        message += 'last name is required\n';
        valid = false;
        count++;
    }

    if(email === ''){
        valid = false;
        message += 'email is required\n';
        count++;

    } else {
        // Checks if the email is validated by email pattern
        if (!emailPattern.test(email)){
            valid = false;
            message += 'email is not valid\n';
        }
    }

    if(textArea === ''){
        valid = false;
        count++;
        message += 'message is required\n';
    }


    if (count > 3){
        alert('all fields are required\n');
    } else if (!valid) {
        alert(message);
    }else{
        alert('Thank you for your message!');
    }
 
});
