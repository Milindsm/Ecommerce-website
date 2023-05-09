import React from "react";
import classes from './Movies.module.css'

const Movie=(props)=>{
    return(<div>
        <li className={classes.content}>
            <h1>{props.title}</h1>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
        <button>Delete</button>
        </div>
    )
}

export default Movie;