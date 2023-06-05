// const API_KEY = 'api_key=6169143918b84ec52e85eb33a14616f3';
// const BASE_URL = "https://api.themoviedb.org/3"
// const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc&'+API_KEY;
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const searchURL =BASE_URL +'search/movie?'+ API_KEY;

const apiKey = '6169143918b84ec52e85eb33a14616f3'; // Replace with your TMDB API key

const fetchPopularMovies = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results.slice(0, 20); // Extract the first 20 movies
    
    // Process and display the movie data
    movies.forEach(movie => {
      const title = movie.title;
      const rating = movie.vote_average;
      console.log(`${title} - Rating: ${rating}`);
    });
  } catch (error) {
    console.log('Error:', error);
  }
};

fetchPopularMovies();
