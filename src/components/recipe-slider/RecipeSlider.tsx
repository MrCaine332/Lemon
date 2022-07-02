import React, {useEffect, useRef} from 'react';
import "./RecipeSlider.scss"
import heroSlider from "../../resources/scripts/slider";

interface IRecipeSlider {
    images: string[]
}

const RecipeSlider: React.FC<IRecipeSlider> = ({ images }) => {

    const sliderRef = useRef<HTMLDivElement>(null)
    const dotsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = heroSlider(sliderRef.current!, dotsRef.current!)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="recipe__slider-wrap">
            <div ref={sliderRef} className="recipe__slider">
                { images.map((image) =>
                    <div className="item" key={image}>
                        <img src={image} />
                    </div>
                )}
            </div>
            <div ref={dotsRef} className="dots">
                { images.map((image) => (
                    <div className="hero__dot" key={image} />
                ))}
            </div>
        </div>
    );
};

export default RecipeSlider;