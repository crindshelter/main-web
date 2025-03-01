let userInput = document.getElementById("text-box");
let celsiusBox = document.getElementById("celsius");
let fahrenheitBox = document.getElementById("fahrenheit");
let submitButton = document.getElementById("my-submit");
let answerText = document.getElementById("answer");

submitButton.onclick = ()=> {
    inputValue = Number(userInput.value)
    if (!isNumeric(inputValue)) {
        answerText.innerHTML = "Invalid Value"
    } else if (celsiusBox.checked) {
        answerText.innerHTML = celsiusConverter(inputValue) + " F";
    } else if (fahrenheitBox.checked) {
        answerText.innerHTML = fahrenheitConverter(inputValue) + " C";
    } else {
        answerText.innerHTML = "Please input a value";
    }
}

function celsiusConverter(c) {
    return ((9 / 5) * c) + 32

}

function fahrenheitConverter(f) {
    return (f - 32) * (5 / 9);

}

function isNumeric(num) {
    return !isNaN(num) && num.toString().trim() !== ""; 
}