"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Basics
// Aaron Dayrit

// Topic: Conversion assignment

/*--------------------------------------------------------
    Creating a calculator

 
--------------------------------------------------------*/
const c = document.getElementById("c");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");

const output = document.getElementById("output");
const input = document.getElementById("input");

const decimal = document.getElementById("decimal");

const number = document.getElementsByClassName("number");
const arrNumbers = [...number];
const arrSymbols = [c, divide, multiply, minus, plus , equals];

let decimalVal = false;
let clear = false;

/*---------------------------------------
    States each number
---------------------------------------*/

arrNumbers.forEach(element => {
    element.addEventListener("click", function(){
        if(input.innerText.charAt(0) != "0"){
        input.innerText += element.innerText;
        }
        else{
        input.innerText = element.innerText;
        }
    })
})

/*-------------------------------------------
    States each operation and calculates
-------------------------------------------*/
arrSymbols.forEach(element =>{
    element.addEventListener("click", function(){
        switch(element){
            case c:
                input.innerText = "0";
                output.innerText = "";
            break;
            case divide:
                input.innerText += "÷";
                break;
            case multiply:
                input.innerText += "×";
                break;
            case plus:
                input.innerText += "+";
                break;
            case minus:
                input.innerText += "-";
                break;  
            case equals:

                let equation = input.innerText.replace(/÷/g, "/").replace(/×/g, "*");
                if(isNaN(equation.slice(-1))){
                    output.innerText = input.innerText + "=";
                    input.innerText = "ERROR";
                }else{
                    output.innerText = input.innerText + "=";
                    input.innerText = eval(equation);
                }
        }
    })
})

function clearNum(){
    input.innerText = "";
    output.innerText = "";
}
