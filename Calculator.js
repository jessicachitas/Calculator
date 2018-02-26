var inputScreen = document.getElementById("screenInput");

function addNumberToInput(number){
    var input = inputScreen.value;
    inputScreen.value = input + number;
}