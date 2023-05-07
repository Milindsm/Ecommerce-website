import React from "react";
import ProductList from "./ProductList";
import classes from "./List.module.css";

const AvailableProducts = () => {
    const productsArr = [
        {
            title: "Colors",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },

        {
            title: "Black and white Colors",

            price: 50,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },

        {
            title: "Yellow and Black Colors",

            price: 70,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },

        {
            title: "Blue Color",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    const productsList = productsArr.map((item) => (
        <ProductList
            id={item.title}
            title={item.title}
            price={item.price}
            img={item.imageUrl}
        />
    ));

    return <div className={classes.productsList}>{productsList}</div>;
};

export default AvailableProducts;