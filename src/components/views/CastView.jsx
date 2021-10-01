import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../API/fetchMovies";
import {
  list,
  item,
  container,
  listTitle,
  ref,
  thumb,
} from "../styles/Cast.module.css";

function CastView(props) {
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const handleClick = (e) => {
    e.preventDefault();

    if (credits) {
      return setCredits(null);
    }

    fetchMovieCredits(movieId)
      .then((r) => setCredits(r))
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      {error && (
        <div>
          <p>Credits not found. {error}</p>
        </div>
      )}

      <a className={ref} href="/" onClick={handleClick}>
        Cast
      </a>

      {credits && (
        <div className={container}>
          <h3 className={listTitle}> Cast:</h3>
          <ul className={list}>
            {credits.cast.map(({ id, name, profile_path, character }, idx) => (
              <li key={idx} className={item}>
                <div className={thumb}>
                  <img
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  />
                </div>
                <p>
                  <span>Name:</span> {name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </li>
            ))}
          </ul>

          <h3 className={listTitle}>Crew:</h3>
          <ul className={list}>
            {credits.crew.map(({ id, name, profile_path, job }, idx) => (
              <li key={idx} className={item}>
                <div className={thumb}>
                  <img
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  />
                </div>
                <p>
                  <span>Name:</span> {name}
                </p>
                <p>
                  <span>Job:</span> {job}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CastView;

// useEffect(() => {
//     if (movieId) {
//         fetchMovieCredits(movieId)
//             .then(r => setCredits(r))
//             .catch(error => setError(error.message))
//     }
// }, [movieId]);
