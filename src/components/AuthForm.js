import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {

    const [isLogin,setIsLogin] = useState(true);
    const [isLoading,setIsLoading] = useState();
    const navigate = useNavigate();

    const toggleAuthState = () => {
        setIsLogin ( (prevState) => {
            return !prevState;
        })
        console.log(false && 'Orice');
    }

        const submitHandler = (event) => {
            event.preventDefault();

            setIsLoading (true);

            setTimeout( () => {
                setIsLoading (false);
                navigate("/");
            },1000);
        }

        const actionIsLoading = <p>Sending request...</p>;
        const actionIsNotLoading = <button>{isLogin ? "Login" : "Create new account"}</button>;
    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Enter your email</label>
                    <input type="email" id="email" required></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Enter your password</label>
                    <input type="password" id="password" required></input>
                </div>
                <div className={classes.actions}>
                    {/* {!isLoading &&(
                    <button>{isLogin ? "Login" : "Create new account"}</button>)}
                    {isLoading && <p>Sending request...</p> } */}
                    {isLoading ? actionIsLoading : actionIsNotLoading}
                    <button className={classes.toggle} onClick={toggleAuthState}>{isLogin ? "Create new account" : "Login with existing account"}</button>
                </div>
            </form>
        </section>
    )
}

export default AuthForm;