
import {Link, useNavigate } from "react-router-dom";
import {useState, useRef, useContext} from "react";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";
import classes from "./Login.module.css"
import AuthContext from "../../Navbar/Store/AuthContext";


const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const auth_ctx = useContext(AuthContext);

    const isLoggedIn = auth_ctx.isLoggedIn;

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdWOmUbfIHSEExB_TT9-vY3pJWH8FcJv8";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdWOmUbfIHSEExB_TT9-vY3pJWH8FcJv8";
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                setIsLoading(false);
                if (res.ok) {
                    event.target.reset();
                    return res.json();
                } else {
                    await res.json();
                    let errorMessage = "Authentication failed!";
                    throw new Error(errorMessage);
                }
            })
            .then((data) => {
                auth_ctx.login(data.idToken,data.email);
                
                console.log(data);
                navigate ("/store");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div>
            <Header />
            <section className={classes.auth}>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            ref={emailInputRef}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Your Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && (
                            <button>
                                {isLogin ? "Login" : "Create Account"}
                            </button>
                        )}
                        {isLoading && (
                            <p style={{ color: "blue" }}>Sending request...</p>
                        )}

                        <button
                            type="button"
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin
                                ? "Create new account"
                                : "Login with existing account"}
                        </button>
                        {isLoggedIn && (
                        <p>
                            <Link to={'/resetPassword'}>Reset Password?</Link>
                        </p>
                        )}
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
};
export default Login;