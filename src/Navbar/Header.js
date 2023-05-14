import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect,useState } from "react";
import CartContext from "./Store/Cart-context";
import classes from "./Header.module.css";
import Cart from "./Cart/Cart";
import AuthContext from "./Store/AuthContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  //console.log(cartCtx.totalQuantity);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedIn = authCtx.isLoggedIn;
  // console.log(cartCtx);
  console.log(authCtx);

  const [loggedIn, setLoggedIn]=useState(true);
  const checkForInactivity=()=>{
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime<Date.now()){
      setLoggedIn(false)
      authCtx.logout();
      navigate("/");
    }
  }
  const updateExpireTime=()=>{
    const expireTime=Date.now()+10000;
    localStorage.setItem("expireTime",expireTime)
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      checkForInactivity()
    },5000);
    return()=>clearInterval(interval);
  },[]);

  useEffect(()=>{
    updateExpireTime();
    window.addEventListener("click",updateExpireTime)
    window.addEventListener("keypress",updateExpireTime)
    window.addEventListener("scroll",updateExpireTime)
    window.addEventListener("mousemove",updateExpireTime)
    return()=>{
      window.removeEventListener("click",updateExpireTime)
    window.removeEventListener("keypress",updateExpireTime)
    window.removeEventListener("scroll",updateExpireTime)
    window.removeEventListener("mousemove",updateExpireTime)
    }
  },[])

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <div>
      <header>
        <div className={classes.header}>
          <section className={classes.navlist}>
         
            {isLoggedIn && (
              <li>
                <NavLink className={classes.navlist} to="/home">
                  HOME
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink className={classes.navlist} to="/store">
                  STORE
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink className={classes.navlist} to="/movielist">
                  MOVIE
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink className={classes.navlist} to="/about">
                  ABOUT
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink className={classes.navlist} to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            )}

<li>
                <NavLink className={classes.navlist} to="/">
                  LOGIN
                </NavLink>
              </li>
            
            {isLoggedIn && (
              <li>
                <button
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "inherit",

                    borderRadius: "3px",
                  }}
                  onClick={logoutHandler}
                >
                  LOGOUT
                </button>
              </li>
            )}
             
          </section>

          {isLoggedIn && (
            <div>
              <Cart />
              <span className={classes["cart-number"]}>
                {cartCtx.totalQuantity}
              </span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
