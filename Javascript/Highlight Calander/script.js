const highlightButton = document.getElementById('highlight-button');
const clearButton = document.getElementById('clear-button');
const dateInput = document.getElementById('input-date');
const colorInput = document.getElementById('input-color');

const calendarDays = document.querySelectorAll('.calendar-day');

highlightButton.addEventListener('click', () => {
    const selectedDate = parseInt(dateInput.value);
    console.log(selectedDate);

    const color = colorInput.value;
    console.log(color);

    for(let i = 0; i < calendarDays.length; i++){
        const day = calendarDays[i];
        
        const dayNumber = parseInt(day.innerHTML);

        if(dayNumber === selectedDate){
            day.style.backgroundColor = color;
        }
    }

    dateInput.value = "";
    colorInput.value = "";

})

clearButton.addEventListener('click', () => {
    for(let i = 0; i < calendarDays.length; i++){
        const day = calendarDays[i];

        day.style.backgroundColor= '';
    }
    dateInput.value = '';
    colorInput.value = '';    
    
})