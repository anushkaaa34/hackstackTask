const apiKey = '6169143918b84ec52e85eb33a14616f3'; 
const fetchPopularMovies = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const IMG_URL='https://image.tmdb.org/t/p/w500'
    const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=6169143918b84ec52e85eb33a14616f3&query=";
    const form = document.getElementById("form");
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results.slice(0, 20); // Extract the first 20 movies
    console.log(movies);

    async function getMovies(url) {
      const resp = await fetch(url);
      const respData = await resp.json();
      console.log(respData);
      showMovies(respData.results);
      }

      function showMovies(movies) {
        // clear main
        main.innerHTML = "";
        movie.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <img
        src="${IMG_URL + poster_path}"
        alt="${title}"
        />
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(
        vote_average
        )}">${vote_average}</span>
        </div>
        <div class="overview">
        <h3>Overview:</h3>
        ${overview}
        </div>
        `;
        main.appendChild(movieEl);
        });
        }

    const arrTitle=[];
     for (let x in movies)
     {
      arrTitle[x]=movies[x].original_title;
       console.log(arrTitle[x]);
       const flexitem1=document.getElementsByClassName("flexitem1")[x];
       const heading = document.createElement("h1");
       heading.innerHTML=arrTitle[x];
       flexitem1.appendChild(heading);

     }

     const arrRating=[];
     for(let x in movies)
     {
      arrRating[x]=movies[x].vote_average;
      console.log(arrRating[x]);
      const flexitem1=document.getElementsByClassName("flexitem1")[x];
       const heading2 = document.createElement("h3");
       heading2.innerHTML=arrRating[x];
       flexitem1.appendChild(heading2);

     }

     const arrPoster=[];
     for(let x in movies)
     {
      arrPoster[x]=movies[x].poster_path;
      console.log(arrPoster[x]);
      const image=document.getElementsByClassName('flexitem1')[x];
      const poster=document.createElement('img');

      poster.src=IMG_URL+arrPoster[x];
      image.appendChild(poster);
     }
     
    

form.addEventListener("submit", function(event){event.preventDefault();
const search = document.getElementById("searchbar");
const searchTerm = search.value;
if (searchTerm) {
getMovies(SEARCHAPI + searchTerm);
search.value = "";
}})
;








    
  } catch (error) {
    console.log('Error:', error);
  }
};

fetchPopularMovies();
    

      
