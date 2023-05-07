import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart((prevVAl) => !prevVAl);
    };
    return (
        <div>
            {showCart && <CartProduct/>}
            <button onClick={showCartHandler} className={classes.cart}>
                Cart
            </button>
        </div>
    );
};

export default Cart;