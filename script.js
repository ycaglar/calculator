const add = (leftOperand, rightOperand) => leftOperand + rightOperand;

const subtract = (leftOperand, rightOperand) => leftOperand - rightOperand;

const multiply = (leftOperand, rightOperand) => leftOperand * rightOperand;

const divide = (leftOperand, rightOperand) => leftOperand / rightOperand;

const operators = { '+': add, '-': subtract, '*': multiply, '/': divide };

const operate = (leftOperand, operator, rightOperand) => operators[operator](leftOperand, rightOperand);

const digit_buttons = document.querySelectorAll('.digit');
const dot_button = document.querySelector('.dot');
const display = document.querySelector('.display textarea');
const operator_buttons = document.querySelector('.operator');
const clear_all_button = document.querySelector('[name="clear-all"]');
const equals_button = document.querySelector('[name="equals"]');
const clear_button = document.querySelector('[name="clear"]');

digit_buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    const displayLen = display.textContent.length;
    const lastChar = display.textContent.charAt(displayLen - 1);
    const inputChar = event.target.textContent;

    if (displayLen == 0) {
      display.textContent = inputChar;
    } else if (display.textContent == '0' || display.textContent == '+0' || display.textContent == '-0') {
      display.textContent = display.textContent.slice(0, -1) + inputChar;
    } else if (!isNaN(inputChar)) {
      display.textContent += inputChar;
    };
  });
});

dot_button.addEventListener('click', function (event) {
  console.log(Number(display.textContent.charAt(display.textContent.length - 1)));
  if (!isNaN(display.textContent.charAt(display.textContent.length - 1)) && !display.textContent.includes('.')) {
    display.textContent += event.target.textContent;
    dot_button_flag = false;
  };
});

let leftOperand = 0;
let operator = '';
let rightOperand = 0;

operator_buttons.addEventListener('click', function (event) {

  if (display.textContent == '' && event.target.textContent == '-') {
    display.textContent = '-';
  } else if (!isNaN(display.textContent)) {
    leftOperand = Number(display.textContent)
    operator = event.target.textContent;
    display.textContent = '';
  };
});

equals_button.addEventListener('click', function (event) {
  if (display.textContent != '') {
    rightOperand = Number(display.textContent);
  }

  if (operator == '+') {
    display.textContent = leftOperand + rightOperand;
  } else if (operator == '-') {
    display.textContent = leftOperand - rightOperand;
  } else if (operator == '×') {
    display.textContent = leftOperand * rightOperand;
  } else {
    display.textContent = leftOperand / rightOperand;
  }
});

// operator_buttons.addEventListener('click', function (event) {
//   const lastChar = display.textContent.charAt(display.textContent.length - 1);
//   const inputChar = event.target.textContent;

//   const displayEmpty = !display.textContent;
//   const displayLen = display.textContent.length;
//   const lastCharOperand = Object.keys(operators).includes(lastChar);
//   const lastCharSign = ['-', '+'].includes(lastChar);
//   const lastCharDigit = !isNaN(lastChar);
//   const pressedSign = ['-', '+'].includes(inputChar);

//   if (displayEmpty && pressedSign || lastCharSign && pressedSign && displayLen == 1) {
//     display.textContent = inputChar;
//   } else if (lastCharDigit) {
//     display.textContent += inputChar;
//   } else if (lastCharOperand && displayLen > 1) {
//     display.textContent = display.textContent.slice(0, -1) + inputChar;
//   };
// });


clear_all_button.addEventListener('click', function (event) {
  display.textContent = '';
});

clear_button.addEventListener('click', function (event) {
  display.textContent = display.textContent.slice(0, display.textContent.length - 1)
});

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operate
// };
