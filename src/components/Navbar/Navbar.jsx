import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <Search />
            <Button children={"Give Feedback"} />
        </nav>
    )
}


export default NavBar;