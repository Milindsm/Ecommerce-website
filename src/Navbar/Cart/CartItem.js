import React, {useContext} from "react";
import CartContext from "../Store/Cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const cartContext = useContext(CartContext);

    const removeItemHandler = (event) => {
        event.preventDefault();
        cartContext.removeItems(props.id);
    };
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
                <button
                    className={classes["btn-remove"]}
                    onClick={removeItemHandler}
                >
                    REMOVE
                </button>
            </span>
        </li>
    );
};

export default CartItem;