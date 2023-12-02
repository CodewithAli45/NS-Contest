//use the API given below
const API_KEY = "f1a87d30ad8792e0dd1c12ce07d37337";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
//edit the below given HTML to render content dynamically
const sortingOrder = document.getElementById('sort');
const movieDisplay = document.getElementById('movies');

let sortedMovie = [];

async function movieSort(order){
    try{
        sortedMovie = await fetchMovie();
        if(order === 'asc'){
            sortedMovie.sort((a,b) => {
                return a.release_date.localeCompare(b.release_date);
            })
        }else if(order === 'desc'){
            sortedMovie.sort((a,b) => {
                return b.release_date.localeCompare(a.release_date);
            })
        }

        movieDisplay.innerHTML = '';
        displayMovie();
    }catch(err){
        console.log("error in displaying movie")
    }
}

async function fetchMovie(){
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        
        return data.results;
    }
    catch{(err) => {
        throw Error(err);
    }
    }
}
function displayMovie(){
    sortedMovie.map((movie) => {
        const movieDiv = document.createElement('div');
        const img = document.createElement('img');
        const contentDiv = document.createElement('dov');
        const title = document.createElement('h2');
        const year = document.createElement('p');
        const overview = document.createElement('p');

        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        movieDiv.className = 'movie'

        title.innerText = movie.title;
        year.innerText = movie.release_date.substring(0,4);
        overview.innerText = movie.overview;

        movieDiv.appendChild(img);

        contentDiv.appendChild(title);
        contentDiv.appendChild(year);
        contentDiv.appendChild(overview);
        movieDiv.appendChild(contentDiv);

        movieDisplay.appendChild(movieDiv);
    })
}

sortingOrder.addEventListener('change', () => {
    const order = sortingOrder.value;
    movieSort(order);
})
movieSort("asc");