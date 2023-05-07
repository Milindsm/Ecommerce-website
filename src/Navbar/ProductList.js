import React from "react";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
    return (
        <div className={classes.list}>
            <li>
                <div className={classes.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={classes.image}>
                    <img src={props.img} alt="" />
                </div>
                <div className={classes.details}>
                    <span>${props.price}</span>
                    <button className={classes.button}>ADD TO CART</button>
                </div>
            </li>
        </div>
    );
};

export default ProductList;