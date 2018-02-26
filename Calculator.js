var inputScreen = document.getElementById("screenInput");
var equation = "";

function addNumberToInput(number) {
    var input = inputScreen.value;
    inputScreen.value = input + number;
}
function addOperatorToInput(operator) {
    var input = inputScreen.value;
    equation += inputScreen.value + operator;
}
function clearInput(clear) {
    inputScreen.value = ""
}