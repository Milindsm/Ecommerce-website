import React from "react";
import ReactDOM from "react-dom";

import classes from "./ModalCart.module.css";

const Modal = (props) => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const ModalCart = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Modal>{props.children}</Modal>,
                document.getElementById("modal")
            )}
        </div>
    );
};

export default ModalCart;