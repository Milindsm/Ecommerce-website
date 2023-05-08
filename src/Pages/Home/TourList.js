import React from "react";
import classes from "./TourList.module.css";

const TourList = (props) => {
    return (
        <section className={classes["tour-item"]}>
            <span className={classes["tour-date"]}>{props.date}</span>
            <span className={classes["tour-city"]}>{props.city}</span>
            <span className={classes["tour-place"]}>{props.place}</span>
            <button className={classes.button}>Buy Tickets</button>
        </section>
    );
};

export default TourList;