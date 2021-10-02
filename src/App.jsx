import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Loader from "react-loader-spinner";
import { spinner } from "./components/styles/App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import HomePageView from "./components/views/HomePageView";
// import MoviesPageView from "./components/views/MoviesPageView";
// import MovieDetailsPageView from "./components/views/MovieDetailsPageView";

const HomePageView = lazy(() =>
  import("./components/views/HomePageView" /* webpackChunkName: "HomePage" */)
);
const MoviesPageView = lazy(() =>
  import(
    "./components/views/MoviesPageView" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPageView = lazy(() =>
  import(
    "./components/views/MovieDetailsPageView" /* webpackChunkName: "MovieDetails" */
  )
);

function App() {
  return (
    <div>
      <AppBar />

      <Suspense
        fallback={
          <div className={spinner}>
            <Loader
              color="#00BFFF"
              type="ThreeDots"
              timeout={7000}
              height={150}
              width={150}
            />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPageView />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
