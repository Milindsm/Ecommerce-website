import { useContext, useRef } from "react";
import classes from './ForgotPassword.module.css'
import Footer from "../../Navbar/Footer";
import Header from "../../Navbar/Header";
import AuthContext from "../../Navbar/Store/AuthContext";
const FortgotPassword = () =>{
    const newPasswordInputRef=useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = event =>{
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDdWOmUbfIHSEExB_TT9-vY3pJWH8FcJv8',{
            method:'POST',
            body: JSON.stringify({
                idToken:authCtx.token,
                password:enteredNewPassword,
                returnSecureToken:false
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res=>{
            
        })
    }
return(
    <div>
        <Header/>
    <form onSubmit={submitHandler} className={classes.auth}>
        <h3>Reset Password</h3>
        <div >
            <label className={classes.label} htmlFor="new-password">New Password</label>
            <input className={classes.input} type="password" id="password" minLength="6" ref={newPasswordInputRef}/>
        </div>
        <div>
            <button className={classes.button}>Change Password</button>
        </div>
    </form>
    <Footer/>
    </div>
)
}
export default FortgotPassword;