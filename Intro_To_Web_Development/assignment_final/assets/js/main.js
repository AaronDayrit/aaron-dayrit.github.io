"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Basics
// Aaron Dayrit

// Topic: Final assignment

// Username: Andre
// Password: 2022

/*----------------------------------------
    Global Variables
-----------------------------------------*/

let login = false;


/*--------------------------------------------------------
    Redirecting, keeping, and erasing
--------------------------------------------------------*/

if(window.location.toString().includes('ntro_To_Web_Development/assignment_final/index.html')){
    search();
}

function search(){
    const buttons = document.getElementById('search-buttons').childNodes;
    const buttonsArr = [...buttons];
    const $searchBar = document.getElementById('search-bar');
    const $bing = document.getElementById('bing');
    const $google = document.getElementById('google');

     if (login){
        buttonsArr.forEach(element => {
            if(!element.nodeName.includes('text')){
            element.disabled = false;
            }
    });

    let search = "";

        $google.addEventListener('click', () => {
            search += 'https://www.google.com/search?q=' + $searchBar.value.trim().toString();
            window.location.assign(search);
        });

        $bing.addEventListener('click', () => {
            search += 'https://www.bing.com/search?q=' + $searchBar.value.trim().toString();
            window.location.assign(search);
        });
    }
}

/*---------------------------------------
    Popup form
----------------------------------------*/

const popUpForm = document.getElementById(`popup-form`);
const popUp = document.getElementById('popUp')
const overlay = document.getElementById('overlay')
const close = document.getElementById(`close`);

popUp.addEventListener(`click`, () => {
    popUpForm.classList.toggle('visible');
    overlay.classList.toggle('visible');
})

close.addEventListener(`click`, () => {
    popUpForm.classList.remove('visible');
    overlay.classList.remove('visible');
})

document.addEventListener('keydown', (event) => {
    if(event.key==`Escape`){
        popUpForm.classList.remove('visible');
        overlay.classList.remove('visible');
    }
})

/*---------------------------------------
    Popup form validation
----------------------------------------*/

const $userName = document.getElementById('user-name');
const $password = document.getElementById('password');
const $login = document.getElementById('login-popup');
const $loginOutput = document.getElementById('login-output');

    $login.addEventListener('click', ()=> {
        loginWebsite();
        popUp.innerText = "LOGOUT"
    });
    
    document.addEventListener('keydown', (event) => {
        if(event.key==`Enter`){
            if(popUpForm.classList.contains('visible')){
                loginWebsite();
                popUp.innerText = "LOGOUT"
            }
        }
    });


function loginWebsite(){
    let userName = $userName.value.trim();
    let password = $password.value.trim();
    let valid  = true;
    let count = 0;

    if(userName === ''){
        count++;
        valid = false;
        $userName.classList.add('invalid');
    }else if(userName === 'Andre'){
        $userName.classList.remove('invalid');
    }else{
        valid = false;
        $userName.classList.add('invalid');
    }

    if(password === ''){
        valid = false;
        count++;
        $password.classList.add('invalid');
    }else if (password === 'mitt2022'){
        $password.classList.remove('invalid');
    }else{
        valid = false;
        $password.classList.add('invalid');
    }

    if (count > 0){
        $loginOutput.innerText = 'username and password are required';
    } else if (count = 1 && !valid) {
   
        $loginOutput.innerText = 'username or password are incorrect';
    }else{
        $loginOutput.innerText = '';
        popUpForm.classList.remove('visible');
        overlay.classList.remove('visible');
        login = true;
        search();
    }
}

popUp.addEventListener('click', () =>{
    if(popUp.innerText === "LOGOUT"){
        location.reload();
        console.log('works');
    }
})

/*---------------------------------------
    SIGN UP FORM
----------------------------------------*/

if(window.location.toString().includes('Intro_To_Web_Development/assignment_final/signup.html')){

    const $firstName = document.getElementById('first-name');
    const $lastName = document.getElementById('last-name');
    const $age = document.getElementById('age');
    const $email = document.getElementById('email');
    const $signUp = document.getElementById('signup');
    const $output = document.getElementById('output');

    document.addEventListener('keydown', (event) => {
        if(event.key==`Enter`){
            signUpWebsite();
        }
    });

    $signUp.addEventListener('click', ()=> {
        signUpWebsite();
    });
    
    function signUpWebsite(){
        let emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

        let firstName = $firstName.value.trim();
        let lastName = $lastName.value.trim();
        let age = $age.value.trim();
        let email = $email.value.trim();

        let valid  = true;
        let count = 0;

        if(firstName == ''){
            valid = false;
            count++;
            $firstName.classList.add('invalid');
        }else{
            $firstName.classList.remove('invalid');
        }

        if(lastName ===''){
            valid = false;
            count++;
            $lastName.classList.add('invalid');
        }else{
            $lastName.classList.remove('invalid');
        }

        if(age === ''){
            count++;
            valid = false;
            $age.classList.add('invalid');
        }else{
            let ageInt = parseInt(age);
            if(isNaN(age) || (ageInt < 16 || ageInt > 120)){
                count++;
                valid = false;
                $age.classList.add('invalid');
            }else{
                $age.classList.remove('invalid');
            }
        }

        if(email === ''){
            valid = false;
            count++;
            $email.classList.add('invalid');
        } else {
            if (!emailPattern.test(email)){
                valid = false;
                $email.classList.add('invalid');
            }else{
                $email.classList.remove('invalid');
            }
        }

        if (count > 3){
            $output.innerText = 'all fields are required';
        } else if (!valid) {
            $output.innerText = 'fields in red required';
        }else{
            $output.innerText = '';
            window.location.assign('index.html');
        }
    }

}