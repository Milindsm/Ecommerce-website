import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
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

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <div>
      <header>
        
        <div className={classes.header}>
          <section className={classes.navlist}>
          {!isLoggedIn &&(
              <li>
                <NavLink className={classes.navlist} to="/">
                  LOGIN
                </NavLink>
              </li>
            )}
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
            {isLoggedIn &&(
              <li>
                {<NavLink className={classes.navlist} to="/resetPassword">
                            Reset Password
                          </NavLink>}
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
