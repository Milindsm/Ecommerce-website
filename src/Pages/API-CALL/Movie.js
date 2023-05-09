import React from "react";
import classes from './Movies.module.css'

const Movie=(props)=>{
    return(
        <li className={classes.content}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    )
}

export default Movie;