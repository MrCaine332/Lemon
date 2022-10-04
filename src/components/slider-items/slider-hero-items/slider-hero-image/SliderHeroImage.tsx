import React, {useEffect, useState} from 'react';
import "./SliderHeroImage.scss"
import {IRecipe} from "../../../../types/models";

const SliderHeroImage: React.FC<{sliderItem: IRecipe}> = ({sliderItem}) => {

    const [image, setImage] = useState()

    useEffect(() => {
        if (sliderItem) {
            import(`/src/resources/images/${sliderItem.image}`)
                .then(resolve => setImage(resolve.default))
        }
    }, [sliderItem])

    return (
        <div className="slider__hero-image">
            <img src={image} alt={""} />
        </div>
    );
};

export default SliderHeroImage;