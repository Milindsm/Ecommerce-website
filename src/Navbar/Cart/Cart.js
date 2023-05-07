import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    };
    const hideCartHandler = () => {
        setShowCart(false);
    };
    return (
        <div>
            {showCart && <CartProduct onClose={hideCartHandler} />}
            <button onClick={showCartHandler} className={classes.cart}>
                Cart
            </button>
        </div>
    );
};

export default Cart;