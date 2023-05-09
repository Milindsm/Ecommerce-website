import React, { useState } from "react";

import Movies from "./Movies";
import classes from "./Movies.module.css";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
    async function fetchMovieHandler () {
        setIsLoading(true);
        setError(null);
    try{

        const response = await fetch("https://swapi.dev/api/films")
        const data = await response.json();

            if(!response.ok){
                throw new Error('Something went wrong!')
            }
          
            const transformedMovies = data.results.map((movieData) => {
              return {
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_date,
              };
            });
            setMovies(transformedMovies);
            
            console.log(transformedMovies);
        
  }catch (error){
        setError(error.message);
  }
  setIsLoading(false);
}

    let content = <p>Found no Movies.</p>
    
    if(movies.length > 0){
        content =<Movies movies={movies}/>
    }
    if(error){
        content=<p>{error}</p>
    }
    if(isLoading){
        content=<p>Loading...</p>
    }
  return (
    <React.Fragment>
      <Header />
      <section>
        <button className={classes.button} onClick={fetchMovieHandler}>
          Click me to Fetch the ProductList
        </button>
      </section>
      <section>
        {content}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default MovieList;
