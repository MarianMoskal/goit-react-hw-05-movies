import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "../../API/fetchMovies";
import MovieDetailsPageView from "./MovieDetailsPageView";
import { list, item, title } from "../styles/HomePage.module.css";

const HomePageView = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then((r) => setMovies(r.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error && (
        <div>
          <p>Movies not found. {error}</p>
        </div>
      )}
      {movies && (
        <>
          <h1 className={title}>Trending today</h1>
          <ul className={list}>
            {movies.map((movie) => (
              <Link
                key={movie.id}
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <li className={item}>
                  <p>{movie.title || movie.name}</p>
                  <img
                    alt="Movie cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                </li>
              </Link>
            ))}
          </ul>

          <Route path="/movies/:movieId">
            <MovieDetailsPageView />
          </Route>
        </>
      )}
    </div>
  );
};

export default HomePageView;

//https:image.tmdb.org/t/p/w500
