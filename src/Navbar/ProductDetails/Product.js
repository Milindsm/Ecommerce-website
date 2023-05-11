import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import classes from "./Product.module.css";

const Product = (props) => {
    const [fillImage, setFillImage] = useState(props.img);

    const changeImageHandler = (event) => {
        event.preventDefault();
        console.log(event.target);
        setFillImage(event.target.src);
    };

    return (
        <div>
            <header className={classes.header}></header>
            <section className={classes.title}>
                <span>{props.title}</span>
                <br />
                <span className={classes.price}>{`$${props.price}`}</span>
            </section>
            <section className={classes["review-section"]}>
                <h4>REVIEWS</h4>
                <ul className={classes.ul2}>
                    {props.reviews.map((review) => (
                        <li>{review}</li>
                    ))}
                </ul>
            </section>
            <section className={classes.image}>
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: "",
                            src: fillImage,
                            width: 300,
                            height: 300,
                        },
                        largeImage: {
                            src: fillImage,
                            width: 1200,
                            height: 1800,
                        },
                    }}
                />
            </section>
            <ul className={classes.ul}>
                {props.allimgs.map((img) => (
                    <li className={classes.allimgs}>
                        <img
                            src={img}
                            height="60px"
                            width="60px"
                            alt=""
                            onClick={changeImageHandler}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
