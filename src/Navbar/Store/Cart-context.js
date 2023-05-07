import React from "react";

const CartContext = React.createContext({
    listOfItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    addItems: (item) => {},
    removeItems: (id) => {},
});

export default CartContext;