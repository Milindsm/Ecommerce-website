import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Store/Cart-context";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    if (props.quantity >= 1) {
      cartCtx.addItems({
          ...props,
          quantity: Number(props.quantity) + 1,
      });
  } else {
      cartCtx.addItems({ ...props, quantity: "1" });
  }
  };

  
  return (
    <div className={classes.list}>
      <li key={props.id}>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.image}>
          
          <Link to={`/store/${props.id}`}>
            <img src={props.img} alt="" />
          </Link>
        </div>
        <div className={classes.details}>
          <span>${props.price}</span>
          <button className={classes.button} onClick={addToCartHandler}>
            ADD TO CART
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductList;
