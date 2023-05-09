import React from "react";
import Movie from "./Movie";
import classes from './Movies.module.css'

const Movies=(props)=>{
    return(
        <li className={classes["tour-item"]}>
            {props.movies.map((movie)=>(
                <Movie
                title={movie.title}
                releaseDate={movie.releaseDate}
                openingText={movie.openingText}
                />
            ))
            }
        </li>
    )
}

export default Movies;