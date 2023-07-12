import React from "react";
import headphone from '../../assets/headphone.png'
import styles from './Hero.module.css'


function Hero() {
    return (
        <div className={styles.hero}>

{/* left container */}
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>

            {/* right container  */}

            <div>
                <img width={212} src={headphone} alt="headphones"  />
            </div>

        </div>
    )
}

export default Hero;