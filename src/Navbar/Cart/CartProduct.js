import React from "react";

import ModalCart from "../Modal/ModalCart";
import classes from "./CartProduct.module.css";
import CartItem from "./CartItem";

const CartProduct = () => {
    const cartElements = [
        {
            title: "Colors",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

            quantity: 2,
        },

        {
            title: "Black and white Colors",

            price: 50,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

            quantity: 3,
        },

        {
            title: "Yellow and Black Colors",

            price: 70,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

            quantity: 1,
        },
    ];
    const items = cartElements.map((item) => {
        return (
            <CartItem
                key={item.imageUrl}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
                title={item.title}
                price="$100"
            />
        );
    });

    return (
        <ModalCart>
            <div className={classes["cart_show"]}>
                <button className={classes["cart_cancel_btn"]}>X</button>
                <h1 className={classes.title}>CART</h1>
                <div className={classes.subtitle}>
                    <span className={classes["subtitle_name1"]}>ITEM</span>
                    <span className={classes["subtitle_name2"]}>PRICE</span>
                    <span className={classes["subtitle_name3"]}>QUANTITY</span>
                </div>
                <ul>{items}</ul>
                <div className={classes.total}>
                    <span>Total</span>
                    <span className={classes["total_amount"]}>{`$${100}`}</span>
                </div>
            </div>
        </ModalCart>
    );
};

export default CartProduct;