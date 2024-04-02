import React from "react"
import styles from "./Home.module.scss"
import { HeroSlider } from "@modules/home/hero-slider"
import { HomeRecommendations } from "@modules/home/recommendations"
import { HomeFeatured } from "@modules/home/featured"
import { HomeAuthor } from "@modules/home/author"
import { Helmet } from "react-helmet"

export const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="LEMON project" />
        <title>Lemon</title>
      </Helmet>
      <div className={"page " + styles.homePage}>
        <HeroSlider />
        <HomeRecommendations />
        <div className={styles.homePage_twoCol}>
          <HomeFeatured />
          <HomeAuthor />
        </div>
      </div>
    </>
  )
}
