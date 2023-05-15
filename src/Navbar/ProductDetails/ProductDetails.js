import React from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import {productsArr} from "../AvailableProducts"

const ProductDetail = (props) => {
    console.log(props);

    let { productId } = useParams();
    console.log(productId);

    const itemIndex = productsArr.findIndex((item) => {
        return item.id === productId;
    });
    let content;
    let item = productsArr[itemIndex];
    console.log(item);

    if (item) {
        content = (
            <Product
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.imageUrl}
                price={item.price}
                allimgs={item.allimages}
                reviews={item.reviews}
            />
        );
    }

    return (
        <div>
            <div>{content}</div>
        </div>
    );
};

export default ProductDetail;