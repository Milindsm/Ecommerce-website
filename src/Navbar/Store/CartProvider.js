import React, { useState,useContext,useCallback,useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios"
import CartContext from "./Cart-context";

const CartProvider = (props) => {
    const authCtx = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    let email;
    if (authCtx.isLoggedIn) {
        email = authCtx.email.replace(/[@.]/g, "");
    }
    // console.log(email);

    const getCartItemFromDb = useCallback(async () => {
        console.log(" getcartitem called");
        const response = await fetch(
            `https://crudcrud.com/api/b095fa1ae9cc4b0bb46f38ad497bfc97/cart${email}`
        );
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
            const cartItem = [];
            let amount = 0;
            let totalquantity = 0;
            for (const key in data) {
                // console.log(data[key].updatedList.updatedItem);
                amount +=
                    data[key].updatedItem.price *
                    Number(data[key].updatedItem.quantity);
                totalquantity =
                    totalquantity + Number(data[key].updatedItem.quantity);
                cartItem.push({
                    item: data[key].updatedItem,
                    // email: data[key].email,
                    _id: data[key]._id,
                    // quantity: Number(data[key].updatedItem.quantity),
                });
                console.log(cartItem);
                setTotalAmount(amount);
                setTotalQuantity(totalquantity);
                setCartItems(cartItem);
            }
        } else {
            setCartItems([]);
            setTotalAmount(0);
            setTotalQuantity(0);
        }
    }, [email]);
    useEffect(() => {
        getCartItemFromDb();
    }, [getCartItemFromDb]);

    const addItemToCartHandler = async (item) => {
        // const updatedTotalAmount = cart_context.totalAmount + item.price;
        // setTotalAmount(updatedTotalAmount);
        // setTotalQuantity((preQty) => preQty + 1);
        console.log(cartItems);

        const itemIdx = cartItems.findIndex((i) => i.item.id === item.id);
        let existingItem = cartItems[itemIdx];
        if (existingItem) {
            console.log(existingItem._id);
            let userId = existingItem._id;

            // let updatedItem = {
            //     ...existingItem,
            //     quantity: +existingItem.quantity + 1,
            // };

            // let updatedItems = [...cartItems];
            // updatedItems[itemIdx] = updatedItem;

            let updatedItem = {
                ...item,
                quantity: Number(existingItem.item.quantity) + 1,
            };
            // let updatedItems = [...cartItems];
            // updatedItems[itemIdx] = updatedItem;
            // setCartItems(updatedItems);

            await axios
                .put(
                    `https://crudcrud.com/api/b095fa1ae9cc4b0bb46f38ad497bfc97/cart${email}/${userId}`,
                    {
                        email: email,
                        updatedItem,
                    }
                )
                .then(() => {
                    getCartItemFromDb();
                });
        } else {
            let updatedItem = { ...item, quantity: "1" };

            setCartItems(updatedItem);

            await axios
                .post(
                    `https://crudcrud.com/api/b095fa1ae9cc4b0bb46f38ad497bfc97/cart${email}`,
                    {
                        email: email,
                        updatedItem,
                    }
                )
                .then(() => {
                    getCartItemFromDb();
                });
        }
    }

    const removeItemToCartHandler = async (item) => {
        const itemIdx = cartItems.findIndex((i) => i.item.id === item.id);
        let existingItem = cartItems[itemIdx];
        let userId = existingItem._id;

        await axios
            .delete(
                `https://crudcrud.com/api/b095fa1ae9cc4b0bb46f38ad497bfc97/cart${email}/${userId}`
            )
            .then(() => {
                getCartItemFromDb();
            });
        }
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
            totalAmount: +totalAmount,
            totalQuantity: +totalQuantity,
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
