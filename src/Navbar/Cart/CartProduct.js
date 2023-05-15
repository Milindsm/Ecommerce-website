import React, { useContext} from "react";
import CartContext from "../Store/Cart-context";

import ModalCart from "../Modal/ModalCart";
import classes from "./CartProduct.module.css";
import CartItem from "./CartItem";


const CartProduct = (props) => {
    const cartContext = useContext(CartContext);

    const purchaseHandler = () => {
        alert(
            "No purchase functionality is added yet!! Thanks for clicking purchase 😁"
        );
    };
    
    const items = (
        <ul>
            {cartContext.listOfItems.map((item) => {
                return (
                    <CartItem
                        key={item.item.id}
                        id={item.item.id}
                        quantity={item.item.quantity}
                        imageUrl={item.item.img}
                        title={item.item.title}
                        price={item.item.price}
                    />
                );
            })}
        </ul>
    );

    return (
        <ModalCart>
             {cartContext.listOfItems.length > 0 && (
                <div className={classes["cart_show"]}>
                    <button
                        className={classes["cart_cancel_btn"]}
                        onClick={props.onClose}
                    >
                        X
                    </button>
                    <h1 className={classes.title}>CART</h1>
                    <div className={classes.subtitle}>
                        <span className={classes["subtitle_name1"]}>ITEM</span>
                        <span className={classes["subtitle_name2"]}>PRICE</span>
                        <span className={classes["subtitle_name3"]}>
                            QUANTITY
                        </span>
                    </div>
                    <ul>{items}</ul>

                    <p
                        style={{
                            marginBottom: "30px",
                            fontSize: "12px",
                            color: "grey",
                            wordSpacing: "5px",
                        }}
                    >
                        *Quantity of each item can be changed by clicking on its
                        respective image.
                    </p>

                    <div className={classes.total}>
                        <span>Total</span>
                        <span className={classes["total_amount"]}>
                            {`$${cartContext.totalAmount}`}
                        </span>
                        <br />

                        <button
                            className={classes.button}
                            onClick={purchaseHandler}
                        >
                            PURCHASE
                        </button>
                    </div>
                </div>
             )};
             {cartContext.listOfItems.length === 0 && (
                <div className={classes["cart_show"]}>
                    <button
                        className={classes["cart_cancel_btn"]}
                        onClick={props.onClose}
                    >
                        X
                    </button>
                    <h3 style={{ textAlign: "center", marginTop: "12rem" }}>
                        Your Cart is empty
                    </h3>
                </div>
             )};
             </ModalCart>
    );
};

export default CartProduct;