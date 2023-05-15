import React, { useState, useContext} from "react";
import ReactImageMagnify from "react-image-magnify";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import CartContext from "../Store/Cart-context";
import arrow from '../../assests/left_arrow.png';
import Cart from '../Cart/Cart'
import Input from "../../UI/Input";

const Product = (props) => {
    const [fillImage, setFillImage] = useState(props.img);
    const cartCtx = useContext(CartContext);
    console.log(props);

    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById(props.id).value;

        cartCtx.addItems({ ...props, quantity });
        console.log(cartCtx);
    };

    console.log(props);


    const changeImageHandler = (event) => {
        event.preventDefault();
        console.log(event.target);
        setFillImage(event.target.src);
    };

    return (
        <div>
            <header className={classes.header}>
            <Link to="/store">
                    <img className={classes.arrow} src={arrow} alt="back" />
                </Link>
                <Cart />
                <span className={classes["cart-number"]}>
                    {cartCtx.totalQuantity}
                </span>
            </header>
            <section className={classes.title}>
                <span>{props.title}</span>
                <br />
                <span className={classes.price}>{`$${props.price}`}</span>
            </section>
            <section className={classes["review-section"]}>
                <h4>REVIEWS</h4>
                <ul className={classes.ul2}>
                    {props.reviews.map((review,i) => (
                        <li key={i}>{review}</li>
                    ))}
                </ul>
            </section>
            <section className={classes.image}>
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: "",
                            src: fillImage,
                            width: 300,
                            height: 300,
                        },
                        largeImage: {
                            src: fillImage,
                            width: 1200,
                            height: 1800,
                        },
                    }}
                />
            </section>
            <ul className={classes.ul}>
                {props.allimgs.map((img,i) => (
                    <li key={i} className={classes.allimgs}>
                        <img
                            src={img}
                            height="60px"
                            width="60px"
                            alt=""
                            onClick={changeImageHandler}
                        />
                    </li>
                ))}
            </ul>
            <form className={classes.form}>
                <Input
                    label="Quantity"
                    input={{
                        id: props.id,
                        type: "number",
                        min: "1",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button className={classes.button} onClick={addItemToCart}>
                    Add Item To Cart
                </button>
            </form>
        </div>
    );
};

export default Product;
