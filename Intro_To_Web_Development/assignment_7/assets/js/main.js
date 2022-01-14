"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Basics
// Aaron Dayrit

// Topic: Conversion assignment

/*--------------------------------------------------------
    Converting
--------------------------------------------------------*/

const celInput = document.getElementById('cel');
const celBtn = document.getElementById('cel-btn');
const celOutput = document.getElementById('output1')

celBtn.addEventListener(`click`, function(){
    const input = celInput.value.trim();
    let output = 0;
    if(Number(input)){
        output = (input*9/5) + 32;
        celOutput.innerText = `(${input}C * 9/5) + 32 = ${Math.round(output)}F`;
    }
    else{

        celOutput.innerText = `(${input}) must be a valid number`;
    }
})

const ferInput = document.getElementById("fer");
const ferBtn = document.getElementById("fer-btn");
const ferOutput = document.getElementById(`output2`)

ferBtn.addEventListener(`click`, function(){
    const input = ferInput.value.trim();
    let output = 0;
    if(Number(input)){
        output = (input - 32)*5/9;
        ferOutput.innerText = `(${input}F - 32) * 5/9 = ${Math.round(output)}`;
    }
    else{

        ferOutput.innerText = `(${input}) must be a valid number`;
    }
})

/*--------------------------------------------------------
    Lightmode button
--------------------------------------------------------*/

const body = document.querySelector(`body`);
const lightButton = document.getElementById(`light-button`);
const inputText = document.querySelectorAll('input');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');

lightButton.addEventListener(`click`, function(){
    body.classList.toggle('light-mode');
    this.classList.toggle(`light-mode`);
    inputText.forEach(element => {
        element.classList.toggle(`light-mode`);
    })
    p.forEach(element => {
        element.classList.toggle(`light-mode`);
    })
    h2.forEach(element => {
        element.classList.toggle(`light-mode`);
    })

})