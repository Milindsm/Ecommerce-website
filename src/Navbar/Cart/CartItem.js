import React, {useContext} from "react";
import CartContext from "../Store/Cart-context";
import classes from "./CartItem.module.css";
import { Link } from "react-router-dom";
import Input from "../../UI/Input";

const CartItem = (props) => {
    const cartContext = useContext(CartContext);
    console.log(props);

    const removeItemHandler = (event) => {
        event.preventDefault();
        cartContext.removeItems(props);
    };
    return (
        <div>
            <li key={props.id} className={classes.list}>
                <span className={classes.title1}>
                    <Link to={`/store/${props.id}`}>
                        <img
                            className={classes.img}
                            src={props.imageUrl}
                            alt="Product"
                        />
                    </Link>
                    <span>{props.title}</span>
                </span>
                <span className={classes.price}>{`$${props.price}`}</span>
                <span className={classes.title2}>
                    <Input
                        className={classes.quantity}
                        // type="number"
                        // value={props.quantity}
                        input={{
                            id: props.id,
                            type: "number",
                            min: "1",
                            step: "1",
                            defaultValue: props.quantity,
                        }}
                    />
                    <button
                        className={classes["btn-remove"]}
                        onClick={removeItemHandler}
                    >
                        REMOVE
                    </button>
                </span>
            </li>
        </div>
    );
};

export default CartItem;