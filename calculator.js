const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const mulBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const calRes = document.getElementById("calculation-result");

function add(input1, input2) {
  return input1 + input2;
}
function subtract(input1, input2) {
  return input1 - input2;
}
function multiply(input1, input2) {
  return input1 * input2;
}
function divide(input1, input2) {
  return input1 / input2;
}
if (addBtn) {
  addBtn.addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("number1").value) || 0;
    const input2 = parseFloat(document.getElementById("number2").value) || 0;
    const Res = add(input1, input2);
    if (calRes) calRes.textContent = Res;
  });
}

if (subBtn) {
  subBtn.addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("number1").value) || 0;
    const input2 = parseFloat(document.getElementById("number2").value) || 0;
    const Res = subtract(input1, input2);
    if (calRes) calRes.textContent = Res;
  });
}
if (mulBtn) {
  mulBtn.addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("number1").value) || 0;
    const input2 = parseFloat(document.getElementById("number2").value) || 0;
    const Res = multiply(input1, input2);
    if (calRes) calRes.textContent = Res;
  });
}
if (divBtn) {
  divBtn.addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("number1").value) || 0;
    const input2 = parseFloat(document.getElementById("number2").value) || 0;
    const Res = divide(input1, input2);
    if (calRes) calRes.textContent = Res;
  });
}
