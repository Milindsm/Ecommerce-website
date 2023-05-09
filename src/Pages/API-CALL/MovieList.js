import React, { useState } from "react";

import Movies from "./Movies";
import classes from "./Movies.module.css";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovieHandler () {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json();
      
      
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
        console.log(transformedMovies);
      
  };
  return (
    <React.Fragment>
      <Header />
      <section>
        <button className={classes.button} onClick={fetchMovieHandler}>
          Click me to Fetch the ProductList
        </button>
      </section>
      <section>
        {!isLoading && <Movies movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default MovieList;
