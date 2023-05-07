import React, { useContext, useState } from "react";
import CartContext from "../Store/Cart-context";

import ModalCart from "../Modal/ModalCart";
import classes from "./CartProduct.module.css";
import CartItem from "./CartItem";


const CartProduct = () => {
    const cartContext = useContext(CartContext);
    const [hideCart, setHideCart] = useState(false);
    const hideCartHandler = () => {
        setHideCart((prevVal) => !prevVal);
    };
    const items = (
        <ul>
            {cartContext.listOfItems.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        quantity={item.quantity}
                        imageUrl={item.img}
                        title={item.title}
                        price={item.price}
                    />
                );
            })}
        </ul>
    );

    return (
        <div>
            {!hideCart && (
                <ModalCart>
                    <div className={classes["cart_show"]}>
                        <button
                            className={classes["cart_cancel_btn"]}
                            onClick={hideCartHandler}
                        >
                            X
                        </button>
                        <h1 className={classes.title}>CART</h1>
                        <div className={classes.subtitle}>
                            <span className={classes["subtitle_name1"]}>
                                ITEM
                            </span>
                            <span className={classes["subtitle_name2"]}>
                                PRICE
                            </span>
                            <span className={classes["subtitle_name3"]}>
                                QUANTITY
                            </span>
                        </div>
                        <ul>{items}</ul>
                        <div className={classes.total}>
                            <span>Total</span>
                            <span className={classes["total_amount"]}>
                                {`$${cartContext.totalAmount}`}
                            </span>
                        </div>
                    </div>
                </ModalCart>
            )}
        </div>
    );
};

export default CartProduct;