import React, {useEffect, useRef} from 'react';
import {ISlider} from "../Slider";
import Slider from "../../../resources/scripts/slider";
import "./SliderMovable.scss"
import {useAppSelector} from "../../../hooks";

const SliderMovable: React.FC<ISlider> = ({items, ratio, dotsRef}) => {

    const sliderRef = useRef<HTMLDivElement>(null)
    const styleState = useAppSelector(state => state.style)

    useEffect(() => {
        if (items.length > 1) {
            const interval = Slider(sliderRef.current!, dotsRef?.current)
            return () => {
                clearInterval(interval)
            }
        }
    }, [items.length])

    return (
        <div ref={sliderRef} className="slider__movable">
            { items.map((item: any, index: number) => (
                <div className="slider__item" key={index}>
                    {item.map((component: any, index: number) => (
                        <div key={index} style={{width: styleState.windowWidth > 768 ? ratio[index]!.toString() + "%" : ""}}>
                            {component}
                        </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default SliderMovable;