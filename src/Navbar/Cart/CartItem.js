import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    return (
        <li key={props.key} className={classes.list}>
            <span className={classes.title1}>
                <img
                    className={classes.img}
                    src={props.imageUrl}
                    alt="Product"
                />
                <span>{props.title}</span>
            </span>
            <span className={classes.price}>{`$${props.price}`}</span>
            <span className={classes.title2}>
                <input
                    className={classes.quantity}
                    type="number"
                    value={props.quantity}
                   
                />
                <button className={classes["btn-remove"]}>REMOVE</button>
            </span>
        </li>
    );
};

export default CartItem;