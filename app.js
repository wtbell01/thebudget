//variables to hold rates and outputs
const necessitiesRate = .5;
const wantsRate = .3;
const savingsRate = .2;
let necessitiesOutput = document.getElementById('necessities-output');
let wantsOutput = document.getElementById('wants-output');
let savingsOutput = document.getElementById('savings-output');

//Event listener on the calculator form for submit
document.getElementById('calculator-form').addEventListener('submit', calculateInput);

//Event listener on the clear button to clear fields
document.getElementById('clear-button').addEventListener('click', clearCalculator);

//get user input, perform calculations, and display results
function calculateInput(e){
  //variable to hold user input
  let userInput = document.getElementById('income-input').value;
  
  //multiply input by rates
  let necessitiesCalculation = userInput * necessitiesRate;
  let wantsCalculation = userInput * wantsRate;
  let savingsCalculation = userInput * savingsRate;

  //place commas in thousands mark
  let necessitiesAmount  = necessitiesCalculation.toLocaleString('en-US');
  let wantsAmount = wantsCalculation.toLocaleString('en-US');
  let savingsAmount = savingsCalculation.toLocaleString('en-US');

  //Display amounts on the form
  necessitiesOutput.textContent = `$${necessitiesAmount}`;
  wantsOutput.textContent = `$${wantsAmount}`;
  savingsOutput.textContent = `$${savingsAmount}`;

  e.preventDefault();
}


function clearCalculator(e){
  necessitiesOutput.textContent = '$0';
  wantsOutput.textContent = '$0';
  savingsOutput.textContent = '$0';

  e.preventDefault();
}
