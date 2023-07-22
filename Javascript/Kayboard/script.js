
const previewDiv = document.querySelector('.preview');
const keyboard = document.querySelector('.keyboard');

const keyboradKeys = document.querySelectorAll('.key');

keyboradKeys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;
        console.log(keyValue, "key pressed");
        previewDiv.textContent += keyValue;

        if(previewDiv.innerHTML == 'forty two'){
            fetchQuote();
        }
    })
});

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.content);
            const quoteDiv = document.createElement('div');
            quoteDiv.className = 'quote';
            quoteDiv.textContent = data.content;
            keyboard.appendChild(quoteDiv);
        })
}