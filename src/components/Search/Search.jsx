import React from "react";
import styles from './Search.module.css';


function Search() {
    const placeholder = "Search a album of your choice";

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("hey I am Sumbitted")
    }

    return (
        <form className={styles.searchContainer} onSubmit={onSubmitHandler}>

            <input className={styles.search} type="text" placeholder={placeholder} />
            <button className={styles.searchButton} type="submit">
                {/* icon */} search
            </button>

        </form>
    )
}


export default Search;