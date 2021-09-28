import axios from "axios";

const BASE_URL = "https:api.themoviedb.org/3/";
const API_KEY = "d2531e14d49c44f419dbab0e50f36d2c";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchData = async (url = "", query) => {
  const response = await axios(url, { params: { query } });
  // console.log(response);
  return (response.status = 200 ? await response.data : Promise.reject(Error));
};

export function fetchTrendingMovies() {
  return fetchData("trending/all/day");
}

export function fetchMovieById(movieId) {
  return fetchData(`movie/${movieId}`);
}

export function fetchMovieByTitle(query) {
  return fetchData("search/movie", query);
}

export function fetchMovieCredits(movieId) {
  return fetchData(`movie/${movieId}/credits`);
}

export function fetchMovieReviews(movieId) {
  return fetchData(`movie/${movieId}/reviews`);
}

// API_KEY "d2531e14d49c44f419dbab0e50f36d2c"

//https:developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.

//https:developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.

//https:developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.

//https:developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.

//https:developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
