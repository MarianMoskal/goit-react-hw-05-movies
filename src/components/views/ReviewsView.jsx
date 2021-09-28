import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../API/fetchMovies";
import { link } from "../styles/Reviews.module.css";

function ReviewsView(props) {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const handleClick = (e) => {
    e.preventDefault();

    if (reviews) {
      return setReviews(null);
    }

    fetchMovieReviews(movieId)
      .then((r) => setReviews(r.results))
      .catch((error) => setError(error.message));
  };

  const rule = reviews && reviews.length === 0;

  return (
    <div>
      {error && (
        <div>
          <p>Reviews not found. {error}</p>
        </div>
      )}

      <a href="/" onClick={handleClick} className={link}>
        Reviews
      </a>

      {rule && (
        <div>
          <p>There are no reviews for this movie</p>
        </div>
      )}

      {reviews && (
        <ul>
          {reviews.map(({ author, content, created_at }, idx) => (
            <li key={idx}>
              <p>
                <span>Author:</span> {author}
              </p>
              <p>
                <span>Created:</span> {created_at}
              </p>
              <p>
                <span>Review:</span> {content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReviewsView;

// useEffect(() => {
//     if (movieId) {
//         fetchMovieReviews(movieId)
//             .then(r => setReviews(r.results))
//             .catch(error => setError(error.message))
//     }
// }, [movieId]);
