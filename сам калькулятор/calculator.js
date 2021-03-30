
let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");

let getNumberFromInput = function(input) {
    let value1 = input.value;
    let numberValue1 = new Number(value1);
    return numberValue1;
}

let getNumbers = function() {
    let number1 = getNumberFromInput(number1Input);
    let number2 = getNumberFromInput(number2Input);
    let result = {
        num1: number1,
        num2: number2
    }
    return result;
}


let numberPlusButton = document.getElementById("1");

var clickPlusButton = function() {
    let numbersValues = getNumbers();

    let value3 = numbersValues.num1 + numbersValues.num2; 
    window.alert("Ирочка будет: " + value3);
}
numberPlusButton.addEventListener('click', clickPlusButton);

let numberMinusButton = document.getElementById("minusBtn");

let clickMinusButton = function() {
    let numbersValues = getNumbers();

    let value3 = numbersValues.num1 - numbersValues.num2;
    window.alert("Ирочка будет: " + value3);
}
numberMinusButton.addEventListener('click', clickMinusButton);

let numberMultiplysButton = document.getElementById("multiplysBtn");

let clickMultiplysButton = function() {
    let numbersValues = getNumbers();

    let value3 = numbersValues.num1 * numbersValues.num2; 
    window.alert("Ирочка будет: " + value3);
}
numberMultiplysButton.addEventListener('click', clickMultiplysButton);

let numberDevideButton = document.getElementById("devideBtn");

let clickDevideButton = function() {
    let numbersValues = getNumbers();

    let value3 = numbersValues.num1 / numbersValues.num2;
    window.alert("Ирочка будет: " + value3);
}

numberDevideButton.addEventListener('click', clickDevideButton);