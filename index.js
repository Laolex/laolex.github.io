const calc1 = document.querySelector(".calc1");
const calc2 = document.querySelector(".calc2");
const calc3 = document.querySelector(".calc3");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const clearLast = document.querySelector(".clear-last");

let disNum1 = "";
let disNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    disNum2 += e.target.innerText;
    calc2.innerText = disNum2;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!disNum2) {
      return;
    }
    haveDot = false;
    const operationName = e.target.innerText;
    if (disNum1 && disNum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disNum2);
    }
    clearVal(operationName);
    lastOperation = operationName;
  });
});

const clearVal = (name = "") => {
  disNum1 += disNum2 + " " + name + " ";
  calc1.innerText = disNum1;
  calc2.innerText = "";
  disNum2 = "";
  calc3.innerText = result;
};

const mathOperation = () => {
  if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disNum2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disNum2);
  } else if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(disNum2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(disNum2);
  }
};

equal.addEventListener("click", (e) => {
  if (!disNum1 || !disNum2) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVal();
  calc2.innerText = result;
  calc3.innerText = "0";
  disNum2 = result;
  disNum1 = "";
});

clear.addEventListener("click", (e) => {
  calc1.innerText = "0";
  calc2.innerText = "0";
  calc3.innerText = "0";
  disNum1 = "";
  disNum2 = "";
  result = "";
});

clearLast.addEventListener("click", (e) => {
  calc2.innerText = "0";
  disNum2 = "";
});
