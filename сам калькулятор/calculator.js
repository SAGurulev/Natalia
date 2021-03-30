
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
 let onOperationBtnClick = function(e) {
    let pressOperation = e.target;
    let operationValue = pressOperation.value;
    let numberValue = getNumbers();
    let resultValue;
    if (operationValue == "+") {
        resultValue = numberValue.num1 + numberValue.num2;
    } else if (operationValue == "-") {
        resultValue = numberValue.num1 - numberValue.num2;
    } else if (operationValue == "*") {
        resultValue = numberValue.num1 * numberValue.num2;
    } else if (operationValue == "/") {
        resultValue = numberValue.num1 / numberValue.num2;
    }
    window.alert("Ирочка будет: " + resultValue);
 }

let getBtnByid = function(id) {
    let btn = document.getElementById(id);
    btn.addEventListener('click', onOperationBtnClick);
}
let operationBtn = ["1", "minusBtn", "multiplysBtn", "devideBtn"];
for (let i = 0; i < operationBtn.length; i++) {
    getBtnByid(operationBtn[i]);
}
