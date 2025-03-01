const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

let inputMain = document.querySelector(".input-main");
let generateButton = document.querySelector(".generate-button");

function alphabetGenerator(lowercaseCheck, uppercaseCheck, numbersCheck, symbolsCheck) {
    let alphabet = "";
    if (lowercaseCheck) {
        alphabet += lowercase;
    } if (uppercaseCheck) {
        alphabet += uppercase;
    } if (numbersCheck) {
        alphabet += numbers;
    } if (symbolsCheck) {
        alphabet += symbols;
    }
    
    return alphabet;
}

function randomPasswordGenerator(words, wordLength) {
    let totalLength = words.length;

    let result = "";
    
    for (let i = 0; i < wordLength; i++) {
        let random = Math.floor(Math.random() * totalLength);
        result += words[random];
    
    }
    return result;
}

generateButton.onclick = ()=> {
    let containsLowercase = document.querySelector(".lowercase").checked;
    let containsUppercase = document.querySelector(".uppercase").checked;
    let containsNumbers = document.querySelector(".numbers").checked;
    let containsSymbols = document.querySelector(".symbols").checked;

    let length = document.querySelector(".length-input").value;
    let checkedList =  alphabetGenerator(containsLowercase, containsUppercase, containsNumbers, containsSymbols);

    let password = randomPasswordGenerator(checkedList, length);

    if (password == 0) {
        inputMain.innerHTML = "Error";
    } else if (!containsLowercase && !containsUppercase && !containsNumbers && !containsSymbols) {
        inputMain.innerHTML = "Error";
    } else {
        inputMain.innerHTML = password;
    }
}

