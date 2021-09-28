import { NavLink } from "react-router-dom";
import { nav, navLink, activeLink } from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={nav}>
        <NavLink exact to="/" className={navLink} activeClassName={activeLink}>
          <span>Home</span>
        </NavLink>

        <NavLink
          exact
          to="/movies"
          className={navLink}
          activeClassName={activeLink}
        >
          <span>Movies</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
