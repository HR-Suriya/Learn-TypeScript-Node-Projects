#! /usr/bin/env node
// Importing All The Operators Files
import { addResult } from "./operators/add.js";
import { subtractResult } from "./operators/subtract.js";
import { multiplyResult } from "./operators/multiply.js";
import { divideResult } from "./operators/divide.js";
// Importing Inquirer From Asking Questions In Prompt
import inquirer from "inquirer";
// Using Inquirer To Ask Questions
const calculatorPrompt = await inquirer.prompt([
    // Asking For First Number For Calculation
    {
        type: "number",
        name: "firstNumber",
        message: "Please Enter First Number",
    },
    // Asking For Second Number For Calculation
    {
        type: "number",
        name: "secondNumber",
        message: "Please Enter Second Number",
    },
    // Leting The User Choose Which Operator They Want To Use Between Both Numbers Among 4 Most Common Ones
    {
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator",
        message: "Choose Which Operator You Want To Use",
    }
]);
// Getting The Values Of Prompt
const { firstNumber, secondNumber, operator } = calculatorPrompt;
// Making A Condition To Make Sure No Input Is Empty
if (firstNumber && secondNumber && operator) {
    // Making Result = 0 initially, So That We Don't Have Make A Result Variable Again & Again
    let result = 0;
    // Using The If Statement To Run Code If + Operator Is Selected
    if (operator === "+") {
        result = addResult(firstNumber, secondNumber);
        console.log(`Addition Of Number ${firstNumber} + ${secondNumber} Is Equal To = ${result}`);
    }
    // Using The Else If Statement To Run Code If - Operator Is Selected
    else if (operator === "-") {
        result = subtractResult(firstNumber, secondNumber);
        console.log(`Subtraction Between Number ${firstNumber} - ${secondNumber} Is Equals To = ${result}`);
    }
    // Using The Else If Statement To Run Code If * Operator Is Selected
    else if (operator === "*") {
        result = multiplyResult(firstNumber, secondNumber);
        console.log(`Multiplication Of Number ${firstNumber} X ${secondNumber} Is Equals To = ${result}`);
    }
    // Using The Else If Statement To Run Code If / Operator Is Selected
    else if (operator === "/") {
        result = divideResult(firstNumber, secondNumber);
        console.log(`Division Between Number ${firstNumber} / ${secondNumber} Is Equals To = ${result}`);
    }
}
else {
    console.log("Invalid Input Kindly Enter Correct Input");
}
