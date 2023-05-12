import React, { useState } from "react";

import CartContext from "./Cart-context";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItemToCartHandler = (item) => {
        const updatedTotalAmount = cart_context.totalAmount + item.price;
        setTotalAmount(updatedTotalAmount);
        setTotalQuantity((preQty) => preQty + 1);
        const itemIdx = cartItems.findIndex((i) => i.id === item.id);
        let existingItem = cartItems[itemIdx];
        if (existingItem) {
            let updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            let updatedItems = [...cartItems];
            updatedItems[itemIdx] = updatedItem;
            setCartItems(updatedItems);
            return;
        }
        let updatedItem = { ...item, quantity: 1 };
        setCartItems([...cartItems, updatedItem]);
    };

    const removeItemToCartHandler = (id) => {
        const itemIndex = cartItems.findIndex((item) => {
            return item.id === id;
        });

        let selectedItem = cartItems[itemIndex];
        setTotalAmount(cart_context.totalAmount - selectedItem.price);
        setTotalQuantity((preQty) => preQty - 1);
        let updatedItem, updatedItems;
        if (selectedItem.quantity > 1) {
            updatedItem = {
                ...selectedItem,
                quantity: +selectedItem.quantity - 1,
            };
            updatedItems = [...cartItems];
            updatedItems[itemIndex] = updatedItem;
            setCartItems(updatedItems);
            return;
        } else {
            updatedItems = cartItems.filter((item) => {
                return item.id !== id;
            });
            setCartItems(updatedItems);
        }
    };

    const displayHandler = (item) => {
        const displayItems = product.filter((i) => {
            return i.id !== item.id;
        });
        if (displayItems) {
            setProduct([{ ...item }]);
        }
    };

    const cart_context = {
        listOfItems: cartItems,
        display: product,
        totalAmount: totalAmount,
        totalQuantity: totalQuantity,
        addItems: addItemToCartHandler,
        removeItems: removeItemToCartHandler,
        displayItems: displayHandler,
    };

    return (
        <div>
            <CartContext.Provider value={cart_context}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;