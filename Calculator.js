var inputScreen = document.getElementById("screenInput");
var equation = "";

function addNumberToInput(number) {
    inputScreen.value += number;
}
function addOperatorToInput(operator) {
    inputScreen.value += operator;
}
function clearInput(clear) {
    inputScreen.value = ""
    equation = ""
}
function equalsInput(equation) {
    var x = eval(inputScreen.value)
    inputScreen.value = x;
}