const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaeEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const generateBtn = document.getElementById('generate');
const resultEl = document.getElementById('result');

function generatePassword(){
    const length = lengthEl.value;
    const uppercase = uppercaseEl.checked;
    const lowercase = lowercaeEl.checked;
    const numbers = numberEl.checked;
    const symbols = symbolsEl.checked;

    let charset = "";
    if(uppercase){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase){
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if(numbers){
        charset += "0123456789";
    }
    if(symbols){
        charset += "~!@#$%^&*()_+{}[]:;<>,/";
    }

    let password = "";

    for(let i = 0; i < length; i++){
        console.log(charset.length, 'is length');
        const randomIndex = Math.floor(Math.random() * charset.length);
        // console.log(randomIndex);
        password += charset[randomIndex];
    }

    resultEl.textContent = password;

}

generateBtn.addEventListener('click', generatePassword);