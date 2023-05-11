import React from "react";
import "./App.css";
//import { Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Store from "./Pages/StorePage/Store";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutPage/About";

import CartProvider from "./Navbar/Store/CartProvider";
import MovieList from "./Pages/API-CALL/MovieList";
import ContactUs from "./Pages/Contact/ContactUs";
import ProductDetail from "./Navbar/ProductDetails/ProductDetails";
import Login from "./Pages/LoginPage/Login";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<Login />} />
        
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/store/:productId" element={<ProductDetail />}/>
        
      </Routes>
    </CartProvider>
  );
}

export default App;
