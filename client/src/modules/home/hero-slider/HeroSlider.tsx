import React from "react"
import styles from "./HeroSlider.module.scss"
import { HeroSlide } from "@components/home/hero-slide"
import { Section } from "@components/ui/section"
import { useGetTodaySelectionQuery } from "@app/http/recipe-api"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"
import Icons from "@components/ui/icons"
import Autoplay from "embla-carousel-autoplay"

export const HeroSlider = () => {
  const { data: sliderRecipes } = useGetTodaySelectionQuery()

  return (
    <Section noPadding={true}>
      <Carousel
        orientation="horizontal"
        opts={{
          loop: true
        }}
        className={styles.heroSlider}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderRecipes?.map((item, index) => (
            <CarouselItem key={index}>
              <HeroSlide recipe={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={styles.heroSliderButtonPrevious}>
          <Icons name="arrow-down-simple" size={20} />
        </CarouselPrevious>
        <CarouselNext className={styles.heroSliderButtonNext}>
          <Icons name="arrow-down-simple" size={20} />
        </CarouselNext>
      </Carousel>
    </Section>
  )
}
