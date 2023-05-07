import React, { useContext } from "react";
import CartContext from "./Store/Cart-context";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.addItems(props);
    };
    return (
        <div className={classes.list}>
            <li key={props.id}>
                <div className={classes.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={classes.image}>
                    <img src={props.img} alt="" />
                </div>
                <div className={classes.details}>
                    <span>${props.price}</span>
                    <button
                        className={classes.button}
                        onClick={addToCartHandler}
                    >
                        ADD TO CART
                    </button>
                </div>
            </li>
        </div>
    );
};

export default ProductList;