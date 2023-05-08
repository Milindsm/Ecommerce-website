import classes from './Home.module.css'
import React from 'react'
import Header from '../../Navbar/Header'
import Footer from '../../Navbar/Footer'
import HomeContent from './HomeContent'


const Home = () =>{
return(
    <div>
            <Header />
            <div className={classes.head}>
                <h1>The Generics</h1>
                <button className={classes.album}>Get Our Latest Album</button>
                <button className={classes["play-button"]}>►</button>
            </div>
            <HomeContent />
            <Footer />
        </div>
)
}

export default Home;