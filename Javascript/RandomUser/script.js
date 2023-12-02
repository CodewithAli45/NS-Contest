// javascript code goes here
const url = 'https://randomuser.me/api/';
const display = document.getElementById('display');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const additional = document.getElementById('additional');

const getUser = document.getElementById('getUser');

const fetchInformation = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        throw Error("error in fetching from url");
    }
}

async function displayData(){
    try {
        const info = await fetchInformation();

        display.innerHTML = '';
        additional.innerHTML = '';

        const img = document.createElement('img');
        img.src = info?.picture.large;
        const user = document.createElement('h2');
        user.innerHTML = info.name?.first;

        

        display.appendChild(img);
        display.appendChild(user);

    } catch (error) {
        return "something went wrong"
    }
}

getUser.addEventListener('click', () => {
    displayData();
    display.innerHTML = '';
})



displayData();