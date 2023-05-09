import React from "react";
import Movie from "./Movie";
import classes from './Movies.module.css'

const Movies=(props)=>{
    return(
        <ul className={classes["tour-item"]}>
            {props.movies.map((movie)=>(
                <Movie
                title={movie.title}
                releaseDate={movie.release}
                openingText={movie.openingText}
                />
            ))
            }
        </ul>
    )
}

export default Movies;