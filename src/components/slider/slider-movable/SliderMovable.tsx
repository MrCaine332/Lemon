import React, {useEffect, useRef} from 'react';
import Slider from "../../../resources/scripts/slider";
import "./SliderMovable.scss"
import {ISlider} from "../../../types/components";

const SliderMovable: React.FC<ISlider> = (
    {
        itemsToDisplay = 1,
        dotsRef,
        leftButtonRef,
        rightButtonRef,
        children
    }) => {

    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const slider = new Slider(
            sliderRef.current!,
            itemsToDisplay,
            leftButtonRef?.current!,
            rightButtonRef?.current!
        )
        slider.init()
        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <div ref={sliderRef} className="slider__movable">
            {children.map((child, index) => (
                <div className="slider__item" key={index}>
                    {child}
                </div>
            ))}
            {children.map((child, index) => {
                if (index < itemsToDisplay) {
                    return (
                        <div className="slider__item" key={index}>
                            {child}
                        </div>
                    )
                }
                return (<></>)
            })}
        </div>
    );
};

export default SliderMovable;