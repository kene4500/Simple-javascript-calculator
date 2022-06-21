alert(
  "This is a simple calculator\nType your first number\nThen your Second number\nThen choose the operator you want to use such as +,-,*,/"
);
myCalculator();

function myCalculator() {
  let firstNum, secondNum, operator;
  firstNum = prompt("Type your first Number");
  secondNum = prompt("Type your second Number");
  operator = prompt("Type you operator");

  if (operator == "+") {
    result = Number(firstNum) + Number(secondNum);
    alert(result);
  } else if (operator == "-") {
    result = Number(firstNum) - Number(secondNum);
    alert(result);
  } else if (operator == "*" || operator == "x" || operator == "X") {
    result = Number(firstNum) * Number(secondNum);
    alert(result);
  } else if (operator == "/") {
    result = Number(firstNum) / Number(secondNum);
    alert(result);
  } else {
    alert("There was an error in your input!!");
    location.reload();
  }
}
