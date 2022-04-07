import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false);

    const navigate = useNavigate();
    
    const toggleAuth = () => {
        isLoggedIn ? navigate("/") : navigate("/auth");
        setisLoggedIn(!isLoggedIn);
    }

    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>Social Media App</div>
                    </Link>
            <nav>
                <ul className={classes.menu}>
                    <li className={classes.menuItem}>
                        <Link to="/">{isLoggedIn ? "" : "Profil"}</Link>
                    </li>

                    <li className={classes.menuItem}>
                        <Link to="/friends">{isLoggedIn ? "" : "Prieteni"}</Link>
                    </li>
                    <li className={classes.menuItem}>
                        <Link to="/settings">{isLoggedIn ? "" : "Setari"}</Link>
                    </li>
                    <li className={classes.menuItem}>
                        <button onClick={toggleAuth}>{isLoggedIn ? "Login" : "Logout"}</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;