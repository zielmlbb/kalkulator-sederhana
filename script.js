const result = document.getElementById("result")

// action button
const clear = document.getElementById("clear")
const equals = document.getElementById("equals")

// input button
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const addition = document.getElementById("addition")
const subraction = document.getElementById("subraction")
const multiplication = document.getElementById("multiplication")
const divison = document.getElementById("division")

// penyimpanan sementara
let currentNumber = "";
let previosNumber = "";
let operation = "";

one.addEventListener("click", function() {
    currentNumber += "1";
    result.textContent = currentNumber;
});
two.addEventListener("click", function() {
    currentNumber += "2";
    result.textContent = currentNumber;
});
three.addEventListener("click", function() {
    currentNumber += "3";
    result.textContent = currentNumber;
});
four.addEventListener("click", function() {
    currentNumber += "4";
    result.textContent = currentNumber;
});
five.addEventListener("click", function() {
    currentNumber += "5";
    result.textContent = currentNumber;
});
six.addEventListener("click", function() {
    currentNumber += "6";
    result.textContent = currentNumber;
});
seven.addEventListener("click", function() {
    currentNumber += "7";
    result.textContent = currentNumber;
});
eight.addEventListener("click", function() {
    currentNumber += "8";
    result.textContent = currentNumber;
});
nine.addEventListener("click", function() {
    currentNumber += "9";
    result.textContent = currentNumber;
});
zero.addEventListener("click", function() {
    currentNumber += "0";
    result.textContent = currentNumber;
});

addition.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "+";
    result.textContent = operation;
});
subraction.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "-";
    result.textContent = operation;
});
multiplication.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = "x";
    result.textContent = operation;
});
divison.addEventListener("click", function () {
    previosNumber = currentNumber;
    currentNumber = "";
    operation = ":";
    result.textContent = operation;
});

equals.addEventListener("click", function () {
    if (operation === "+") {
        let resultValue = parseFloat(previosNumber) + parseFloat(currentNumber)
        result.textContent = resultValue;
        currentNumber = resultValue.toString();
    } else if (operation === "-") {
        let resultValue = parseFloat(previosNumber) - parseFloat(currentNumber)
        result.textContent = resultValue;
        currentNumber = resultValue.toString();
    } else if (operation === "x") {
        let resultValue = parseFloat(previosNumber) * parseFloat(currentNumber)
        result.textContent = resultValue;
        currentNumber = resultValue.toString();
    } else if (operation === ":") {
        let resultValue = parseFloat(previosNumber) / parseFloat(currentNumber)
        result.textContent = resultValue;
        currentNumber = resultValue.toString();
    }
});

clear.addEventListener("click", function() {
    currentNumber = "";
    previosNumber = "";
    operation = "";
    result.textContent = "Masukkan angka";
});