import React from "react";
import AvailableProducts from "../../Navbar/AvailableProducts";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";
import classes from './Store.module.css'

const Store = () => {
    return (
        <div>
            <Header/>
            <div className={classes.head}>
                <h1>The Generics</h1>
            </div>
            <AvailableProducts/>
            <Footer/>
        </div>
    );
};

export default Store;