import React from "react";
import Button from "../Button/Button";

import styles from "./Hero.css";

const Hero = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>scrapoogle</h1>
        <h2 className={styles.subtitle}>The Scrappy News Scraper</h2>
        <Button/>
    </div>
)

export default Hero;