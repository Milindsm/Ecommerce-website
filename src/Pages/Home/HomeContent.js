import React from "react";
import classes from "./HomeContent.module.css";
import TourList from "./TourList";

const HomeContent = () => {
    const tourlist = [
        {
            date: "JUL16",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE",
        },
        {
            date: "JUL19",
            city: "TORONTO,ON",
            place: "BUDWEISER STAGE",
        },
        {
            date: "JUL22",
            city: "BRISTOW, VA",
            place: "JIGGY LUBE LIVE",
        },
        {
            date: "JUL29",
            city: "PHOENIX, AZ",
            place: "AK-CHIN PAVILION",
        },
        {
            date: "AUG 2",
            city: "LAS VEGAS, NV",
            place: "T-MOBILE ARENA",
        },
        {
            date: "AUG 7",
            city: "CONCORD, CA",
            place: "CONCORD PAVILION",
        },
    ];

    const tourContent = tourlist.map((item) => (
        <TourList date={item.date} city={item.city} place={item.place} />
    ));

    return (
        <section className={classes.content}>
            <h2>TOURS</h2>
            {tourContent}
        </section>
    );
};

export default HomeContent;