// Variables All
let currentNumbre= ''; 
let previousNumber = ''; 
let operation = ''; 
// Call of inputs
value1 = document.getElementById("1");
value2 = document.getElementById("2");
value3 = document.getElementById("3");
valueMas = document.getElementById("+");
value4 = document.getElementById("4");
value5 = document.getElementById("5");
value6 = document.getElementById("6");
valueMenos = document.getElementById("-");
value7 = document.getElementById("7");
value8 = document.getElementById("8");
value9 = document.getElementById("9");
valuePor = document.getElementById("*");
value0 = document.getElementById("0");
valueC = document.getElementById("C");
valueIgual = document.getElementById("=");
valueDiv = document.getElementById("/");
// Call of outputs
valueOutput = document.getElementById("salida");

// Update Display 
function updateDisplay(value){
  valueOutput.value = value
}

// Events
value1.addEventListener("click", function () {
  currentNumbre += 1; 
  updateDisplay(currentNumbre)
});
value2.addEventListener("click", function () {
  currentNumbre += 2; 
  updateDisplay(currentNumbre)
});
value3.addEventListener("click", function () {
  currentNumbre += 3; 
  updateDisplay(currentNumbre)
});
// 
value4.addEventListener("click", function () {
  currentNumbre += 4; 
  updateDisplay(currentNumbre)
});
value5.addEventListener("click", function () {
  currentNumbre += 5; 
  updateDisplay(currentNumbre)
});
value6.addEventListener('click', function () {
  currentNumbre += 6; 
  updateDisplay(currentNumbre)
});
// 
value7.addEventListener('click', function () {
  currentNumbre += 7; 
  updateDisplay(currentNumbre)
});
value8.addEventListener('click', function () {
  currentNumbre += 8; 
  updateDisplay(currentNumbre)
});
value9.addEventListener('click', function () {
  currentNumbre += 9; 
  updateDisplay(currentNumbre)
});
// 
value0.addEventListener('click', function () {
  currentNumbre += 0; 
  updateDisplay(currentNumbre)
});

// Operator 
valueMas.addEventListener("click", function () {
   handleOperator("+");
});

valueMenos.addEventListener('click', function () {
  handleOperator ("-");
});
valuePor.addEventListener('click', function () {
  handleOperator("*");
});

valueDiv.addEventListener('click', function () {
  handleOperator("/");
});

// Manager operator
function handleOperator(op){
  if(currentNumbre === '') return;
  if(previousNumber !== ''){
    calculate();
  }
  operation = op;
  previousNumber = currentNumbre;
  currentNumbre = '';
}

// Event equal 
valueIgual.addEventListener('click', function () {
  calculate();
}); 
function calculate(){
  if (currentNumbre === '' || previousNumber === '') return;
  let result;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumbre);
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  currentNumbre = result.toString();
  updateDisplay(currentNumbre);
  operation = '';
  previousNumber = '';
}
// Event clear

valueC.addEventListener('click', function () {
  currentNumbre = '';
  previousNumber = '';
  operation = '';
  updateDisplay(0);
});
