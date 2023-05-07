import React from "react";
import ProductList from "./ProductList";
import classes from "./AvailableProducts.module.css"

const AvailableProducts = () => {
    const productsArr = [
        {
            id: "1",
            title: "Colors",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },

        {
            id: "2",
            title: "Black and white Colors",

            price: 50,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },

        {
            id: "3",
            title: "Yellow and Black Colors",

            price: 70,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },

        {
            id: "4",
            title: "Blue Color",

            price: 100,

            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    const productsList = productsArr.map((item) => (
        <ProductList
        key={item.id}
        id={item.id}
            title={item.title}
            price={item.price}
            img={item.imageUrl}
        />
    ));

    return <div className={classes.productsList}>{productsList}</div>;
};

export default AvailableProducts;