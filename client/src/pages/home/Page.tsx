import React from 'react';
import styles from "./Page.module.scss"
import {HeroSlider} from "@modules/modules-home/hero-slider";
import {HomeRecommendations} from "@modules/modules-home/home-recommendations";
import {HomeFeatured} from "@modules/modules-home/home-featured";
import {HomeAuthor} from "@modules/modules-home/home-author";

export const Home = () => {
    return (
        <div className={'page ' + styles.homePage}>
            <HeroSlider />
            <HomeRecommendations />
            <div className={styles.homePage_twoCol}>
                <HomeFeatured />
                <HomeAuthor />
            </div>
        </div>
    );
};