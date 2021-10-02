import React, { useState, useEffect, Suspense, lazy } from "react";
import { fetchMovieById } from "../../API/fetchMovies";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Switch, Route } from "react-router";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import CastView from "./CastView";
// import ReviewsView from "./ReviewsView";
import {
  container,
  thumb,
  description,
  button,
  list,
} from "../styles/MovieDetailsPage.module.css";

const CastView = lazy(() =>
  import("./CastView" /*webpackChunkName: 'CastView' */)
);

const ReviewsView = lazy(() =>
  import("./ReviewsView" /*webpackChunkName: 'ReviewsView' */)
);

function MovieDetailsPageView() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (movieId) {
      fetchMovieById(movieId)
        .then((r) => setMovie(r))
        .catch((error) => setError(error.message));
    }
  }, [movieId]);

  const getGenre = (genres) => {
    const result = [];
    genres.map((genre) => result.push(genre.name));
    return result.join(", ");
  };

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <div>
      {error && (
        <div>
          <p>This movie not found. {error}</p>
        </div>
      )}

      {movie && (
        <>
          <button type="button" className={button} onClick={onGoBack}>
            Go back
          </button>
          <div className={container}>
            <div className={thumb}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie cover"
              />
            </div>
            <div className={description}>
              <h2>{movie.title}</h2>
              <p>
                <span>Popularity:</span> {movie.popularity}
              </p>
              <p>
                <span>Original language:</span> {movie.original_language}
              </p>
              <p>
                <span>Genres:</span> {getGenre(movie.genres)}
              </p>
              <p>
                <span>Release date:</span> {movie.release_date}
              </p>
              <p>
                <span>Overview:</span> {movie.overview}
              </p>
            </div>
          </div>

          <hr />

          <ul className={list}>
            <li>
              <ReviewsView />
            </li>
            <hr />
            <li>
              <CastView />
            </li>
          </ul>
          <hr />

          <Suspense
            fallback={
              <Loader
                color="#00BFFF"
                type="ThreeDots"
                timeout={3000}
                height={150}
                width={150}
              />
            }
          >
            <Switch>
              <Route path={`${path}/cast`}>
                <CastView />
              </Route>

              <Route path={`${path}/reviews`}>
                <ReviewsView />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPageView;

//https:image.tmdb.org/t/p/w500

// const CastView = lazy(() => import('./CastView' /*webpackChunkName: 'CastView' */))
// const ReviewsView = lazy(() => import('./ReviewsView' /*webpackChunkName: 'ReviewsView' */))

/* <ul>
            <li>
                <NavLink
                to = {`${url}/cast`}
                className=""
                >
                    CastView
                </NavLink>
            </li>
            <li>
                <NavLink
                to={`${url}/reviews`}
                className=""
                >
                    ReviewsView
                </NavLink>
            </li>
        </ul> */
