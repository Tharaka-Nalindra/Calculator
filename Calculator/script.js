var num_1, num_2, answer, operator;

function Setnum(num) {
  document.getElementById("display").innerHTML += num;
}

function resect() {
  document.getElementById("display").innerHTML = 0;
}

function SetOperator(op) {
  num01 = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = 0;
  operator = op;
}

function getAnswe() {
  num02 = document.getElementById("display").innerHTML;
  if (operator == "+") {
    answer = Number(num01 + num02);
  } else if (operator == "-") {
    answer = Number(num01 - num02);
  } else if (operator == "*") {
    answer = Number(num01 * num02);
  } else if (operator == "/") {
    answer = Number(num01 / num02);
  }
  document.getElementById("display").innerHTML = answer;
}
