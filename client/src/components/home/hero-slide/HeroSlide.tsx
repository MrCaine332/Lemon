import React from "react"
import styles from "./HeroSlide.module.scss"
import { HeroSlideText } from "./hero-slide-text"
import { HeroSlideImage } from "./hero-slide-image"
import { Recipe } from "@app/types/response/models"

type HeroSlideProps = {
  recipe: Recipe
}

export const HeroSlide = ({ recipe }: HeroSlideProps) => {
  return (
    <div className={styles.heroSlide}>
      <HeroSlideText sliderItem={recipe} />
      <HeroSlideImage sliderItem={recipe} />
    </div>
  )
}
