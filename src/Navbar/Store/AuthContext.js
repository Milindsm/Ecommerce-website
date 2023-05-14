import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    email:"",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initial_token = localStorage.getItem("token");
    const initial_email = localStorage.getItem("email");
    const [token, setToken] = useState(initial_token);
    const [email, setEmail] = useState(initial_email);

    const userIsLoggedIn = !!token;


    const loginHandler = (token,email) => {
        setToken(token);
        setEmail(email);
        localStorage.setItem("token", token);
        localStorage.setItem("email",email);
        
    };

    const logoutHandler = () => {
            setToken(null);
            setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };
    const contextValue = {
        token: token,
        email: email,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;