import React, { useContext } from "react";
import CartContext from "../Store/Cart-context";
import Product from "./Product";

const ProductDetail = () => {
    const cart_ctx = useContext(CartContext);
    console.log(cart_ctx);
    const content = cart_ctx.display.map((item) => (
        <Product
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            allimgs={item.allimg}
            reviews={item.reviews}
        />
    ));

    return <div>{content}</div>;
};

export default ProductDetail;
 