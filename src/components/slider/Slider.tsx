/*
        [ SLIDER ]

        <Slider items={items} ratio={[55, 45]} height={"500px"} width={"500px"} />

        [ Attributes ]:
        items - array of arrays of react components, that will be displayed on the slider.
                Outer array contains all other arrays and represents the whole slider.
                Inner arrays contains React Components and represent single slider page.
                Example: items = [[<Component1 />, <Component 2/>],
                                  [<Component1 />, <Component 2/>]]
                         there will be two components displayed on each slider page
                         and total there will be two slider layouts

        ratio - Array of numbers between 0 and 100. Represent width in % of each component on single slider page.
                Example: ratio = [55, 45] - means that there are two components,
                         first will have 55% of width of a slider,
                         second will have 45% of width of a slider.

        height - height of the slider while screen width > 768px.
                 By default is equal to the highest height of all page components

        width - width of the slider. By default is equal to 100%

*/

import React, {useEffect, useRef} from "react"
import "./Slider.scss"
import SliderMovable from "./slider-movable/SliderMovable";
import {useAppSelector} from "../../hooks";

export interface ISlider {
    items: any
    ratio: number[]
    height?: string
    width?: string
    dotsRef? : React.RefObject<HTMLDivElement>
}

const Slider: React.FC<ISlider> = ({items, ratio, height, width}) => {

    const dotsRef = useRef<HTMLDivElement>(null)

    const styleState = useAppSelector(state => state.style)

    return (
        <div className={"slider section shadow-wide"} style={{height: styleState.windowWidth > 768 && height ? height : "", width: width && width}}>
            <SliderMovable items={items} ratio={ratio} dotsRef={dotsRef} />
            <div className="slider__dots-wrap">
                <div ref={dotsRef} className="slider__dots">
                    { items.map((item: any, index: number) => (
                        <div className="slider__dot" key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider;