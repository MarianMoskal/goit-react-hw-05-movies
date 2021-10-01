import React, { useState, useEffect } from "react";
import { fetchMovieByTitle } from "../../API/fetchMovies";
import MovieDetailsPageView from "./MovieDetailsPageView";
import {
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import {
  container,
  list,
  item,
  input,
  button,
  thumb,
} from "../styles/MoviesPage.module.css";

function MoviesPageView() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { path, url } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const search = location.search.slice(1);

  useEffect(() => {
    if (query) {
      fetchMovieByTitle(query)
        .then((r) => setMovies(r.results))
        .catch((error) => setError(error.message));
    }
  }, [query]);

  useEffect(() => {
    if (!query && location.search !== "") {
      setQuery(search);
    }
  }, [location.search, query, search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { textInput } = e.target;
    setQuery(textInput.value);
    textInput.value = "";
  };

  return (
    <>
      {!movieId && (
        <div className={container}>
          <p>
            <span>Here you can find movie by title</span>
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              <input
                className={input}
                type="text"
                id="textInput"
                placeholder="Enter movie title"
              />
            </label>
            <button className={button} type="submit">
              Search
            </button>
          </form>
        </div>
      )}

      {error && (
        <div>
          <p>Something went wrong. {error}</p>
        </div>
      )}

      {movies && (
        <ul className={list}>
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={{
                pathname: `${url}/${movie.id}`,
                state: {
                  from: {
                    pathname: location.pathname,
                    search: query,
                  },
                },
              }}
            >
              <li className={item}>
                <p>{movie.name || movie.title}</p>
                <div className={thumb}>
                  <img
                    alt="Movie cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}

      {movieId && (
        <Route path={path}>
          <MovieDetailsPageView />
        </Route>
      )}
    </>
  );
}

export default MoviesPageView;
