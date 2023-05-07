import React from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Store from './Pages/StorePage/Store';
import Home from './Pages/Home/Home';
import Footer from './Navbar/Footer';
import Header from './Navbar/Header';
import About from './Pages/AboutPage/About';

import CartProvider from './Navbar/Store/CartProvider';


function App() {
  return (
    <CartProvider>
            <Header />
            
            <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store/>} />
            <Route path="/home" element={<Home/>} />
            </Routes>
            <Footer />
        </CartProvider>
  );
}

export default App;
