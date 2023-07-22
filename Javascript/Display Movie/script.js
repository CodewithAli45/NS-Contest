const movieList = document.getElementById('movie-list');

const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f1a87d30ad8792e0dd1c12ce07d37337&language=en-US&page=1'

fetch(URL).then((response) => response.json()).then((data) => {

    const sortedMovies = data.results.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });

    console.log(sortedMovies);

    // sortedMovies.forEach((movie) => {
    //     const movieDiv = document.createElement("div");
    //     movieDiv.classList.add("movie");
    //     const moviePoster = document.createElement("img");
    //     moviePoster.classList.add("poster");
    //     moviePoster.alt = movie.title;
    //     moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    //     const movieTitle = document.createElement("h2");
    //     movieTitle.classList.add("movie-title");
    //     movieTitle.textContent = movie.title;

    //     const movieRelease = document.createElement("p");
    //     movieRelease.classList.add("release-year")
    //     movieRelease.textContent = `${new Date(movie.release_date).getFullYear()}`;

    //     const movieOverview = document.createElement("p");
    //     movieOverview.classList.add("movie-overview")
    //     movieOverview.textContent = movie.overview;

    //     movieDiv.appendChild(moviePoster);
    //     movieDiv.appendChild(movieTitle);
    //     movieDiv.appendChild(movieRelease);
    //     movieDiv.appendChild(movieOverview);
    //     movieList.appendChild(movieDiv);
    // });

    const sorts = document.getElementById('sort-movie');
    sorts.addEventListener('change', () => {
        const sortValue = sorts.value;
        if(sortValue === 'ascending'){
            sortedMovies.sort((a,b) => {
                return a.title.localeCompare(b.title);
            })
        } else if(sortValue === 'descending') {
            sortedMovies.sort((a,b) => {
                return b.title.localeCompare(a.title);
            })
        }
        movieList.innerHTML = '';
        sortedMovies.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("poster");
            moviePoster.alt = movie.title;
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
            const movieTitle = document.createElement("h2");
            movieTitle.classList.add("movie-title");
            movieTitle.textContent = movie.title;
    
            const movieRelease = document.createElement("p");
            movieRelease.classList.add("release-year")
            movieRelease.textContent = `${new Date(movie.release_date).getFullYear()}`;
    
            const movieOverview = document.createElement("p");
            movieOverview.classList.add("movie-overview")
            movieOverview.textContent = movie.overview;
    
            movieDiv.appendChild(moviePoster);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieRelease);
            movieDiv.appendChild(movieOverview);
            movieList.appendChild(movieDiv);
        });

    })
})