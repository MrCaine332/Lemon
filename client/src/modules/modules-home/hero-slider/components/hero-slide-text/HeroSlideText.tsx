import React from 'react';
import styles from "./HeroSlideText.module.scss"
import {Button} from "@components/ui/button";
import {Divider} from "@components/ui/divider";
import {Author} from "@components/ui/author";
import {TimeComViews} from "@components/ui/time-com-views";
import {Recipe} from "@app/types/response/models";

type HeroSliderTextProps = {
    sliderItem: Recipe
}

export const HeroSlideText = ({sliderItem}: HeroSliderTextProps) => {
    return (
        <div className={styles.heroSlideText}>
            <div>
                <h1 className={'textHeader1 ' + styles.titlePopular}>
                    Popular Now
                </h1>
                <Divider />
            </div>
            <div className={styles.heroSlideInfo}>
                <h2 className={'textHeader2 ' + styles.heroSlideInfo_title}>{sliderItem.title}</h2>
                <div className={styles.heroSlideInfo_details}>
                    <Author author={sliderItem.author.username} />
                    <TimeComViews time={sliderItem.cookingTime}
                                  coms={sliderItem.commentsNo}
                                  views={sliderItem.viewsNo} />
                </div>
                <p className={'textBody'}>{sliderItem.description}</p>
            </div>
            <div className={styles.heroSlideFooter}>
                <Button as={"link"}
                        to={'/recipe/' + sliderItem.id}
                        styleType={"outlined"}>
                    GET RECIPE
                </Button>
            </div>
        </div>
    );
};