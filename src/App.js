import React from 'react';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Store from './Pages/StorePage/Store';
import Home from './Pages/Home/Home';
import About from './Pages/AboutPage/About';

import CartProvider from './Navbar/Store/CartProvider';


function App() {
  return (
    <CartProvider>
            
            
            <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store/>} />
            <Route path="/home" element={<Home/>} />
            </Routes>
            
        </CartProvider>
  );
}

export default App;
