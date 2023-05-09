import React, { useEffect, useState,useCallback } from "react";
import AddMovie from "./AddMovie";
import Movies from "./Movies";
import classes from "./Movies.module.css";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


    const fetchMovieHandler = useCallback(async () =>{
        setIsLoading(true);
        setError(null);
    try{

        const response = await fetch("https://644a3edd79279846dce297b5.mockapi.io/order-list")
        const data = await response.json();

            if(!response.ok){
                throw new Error('Something went wrong!')
            }

            const loadedMovie=[];
            for(const key in data){
                loadedMovie.push({
                    id:key,
                    title:data[key].title,
                    openingText:data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }
          
            // const transformedMovies = data.results.map((movieData) => {
            //   return {
            //     id: movieData.episode_id,
            //     title: movieData.title,
            //     openingText: movieData.opening_crawl,
            //     releaseDate: movieData.release_date,
            //   };
            // });
            setMovies(loadedMovie);
            
            console.log(loadedMovie);
        
  }catch (error){
        setError(error.message);
  }
  setIsLoading(false);
},[]);

useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler])

  async function addmovieHandler(movie){
    const response = await fetch('https://644a3edd79279846dce297b5.mockapi.io/order-list',{
        method:'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type':'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
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
      <sction>
        <AddMovie onAddMovie={addmovieHandler}/>
      </sction>
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
