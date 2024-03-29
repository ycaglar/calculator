// add
// subtract
// multiply
// divide

// let leftOperand
// let operator
// let rightOperand

// function operate(leftOperand, operator, rightOperand) {

// }

let add = (leftOperand, rightOperand) => leftOperand + rightOperand;

let subtract = (leftOperand, rightOperand) => leftOperand - rightOperand;

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(leftOperand, rightOperand) {
  return leftOperand / rightOperand;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
