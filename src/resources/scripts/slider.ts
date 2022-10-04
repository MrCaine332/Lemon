
// const Slider = (slider: HTMLDivElement, dots?: HTMLDivElement | null) => {
//     const itemsLength = slider.children.length
//     slider.style.width = `${100 * itemsLength}%`
//     dots?.children.item(0)!.classList.add("slider__dot_active")
//
//     let number: number = 0
//
//     return setInterval(() => {
//         if (dots) {
//             dots.children.item(number)!.classList.toggle("slider__dot_active")
//             number++
//             if (number > itemsLength - 1)
//                 number = 0
//             dots.children.item(number)!.classList.toggle("slider__dot_active")
//         }
//
//         slider.style.transition = "1s"
//         slider.style.transform = `translateX(-${100 / itemsLength}%)`
//         setTimeout(() => {
//             const removedChild = slider.firstChild
//             slider.firstChild!.remove()
//             slider.style.transition = "none"
//             slider.style.transform = "translateX(0)"
//             slider.appendChild(removedChild as Node)
//         }, 1000)
//     }, 5000)
// }


// const Slider = (
//     slider: HTMLDivElement,
//     itemsToDisplay: Number,
//     prevButton?: HTMLDivElement,
//     nextButton?: HTMLDivElement,
//     dotsRef?: HTMLDivElement
// ) => {
//     const itemsLength = slider.children.length
//     slider.style.width = `${100 * itemsLength}%`
//
//     if (prevButton)
//         onPrevButton(prevButton)
//     if (nextButton)
//         onNextButton(nextButton)
//
//
//
//
//     slider.style.transition = "1s"
//     slider.style.transform = `translateX(-${100 / itemsLength}%)`
//     setTimeout(() => {
//         const removedChild = slider.firstChild
//         slider.firstChild!.remove()
//         slider.style.transition = "none"
//         slider.style.transform = "translateX(0)"
//         slider.appendChild(removedChild as Node)
//     }, 1000)
//
//
//     return setInterval(() => {
//
//     }, 5000)
// }
//
// const init = (slider: HTMLDivElement) => {
//     const itemsLength = slider.children.length
//     slider.style.width = `${100 * itemsLength}%`
// }
//
// const onPrevButton = (button: HTMLDivElement) => {
//
// }
//
// const onNextButton = (button: HTMLDivElement) => {
//
// }


class Slider {
    private defaults: any

    private slider: HTMLDivElement
    private itemsToDisplay: number;
    private dotsRef?: HTMLDivElement;
    private nextButton?: HTMLDivElement;
    private prevButton?: HTMLDivElement;

    private childrenLength: number = 0
    private rootChildrenLength: number = 0
    private currentElement: number = 0

    private interval: any

    constructor(
        slider: HTMLDivElement,
        itemsToDisplay: number = 1,
        prevButton?: HTMLDivElement,
        nextButton?: HTMLDivElement,
        dotsRef?: HTMLDivElement
    ) {
        this.slider = slider
        this.itemsToDisplay = itemsToDisplay
        this.nextButton = nextButton
        this.prevButton = prevButton
        this.dotsRef = dotsRef
    }

    init() {
        this.childrenLength = this.slider.children.length
        this.rootChildrenLength = this.childrenLength - this.itemsToDisplay
        this.slider.style.width = `${(100 * this.childrenLength)/this.itemsToDisplay}%`
        this.slider.style.transition = "1s"

        if (this.nextButton)
            this.nextButton.onclick = () => this.onNextButton()
        if (this.prevButton)
            this.prevButton.onclick = () => this.onPrevButton()

        this.registerInterval()
    }

    stopInterval() {
        clearInterval(this.interval)
    }

    onNextButton() {
        const step = (100/this.childrenLength)

        this.stopInterval()

        if (this.currentElement === this.rootChildrenLength - 1
          || this.currentElement === this.rootChildrenLength) {
            this.currentElement = 0
            this.slider.style.transform = `translateX(0)`
        } else {
            this.currentElement++
            this.slider.style.transform = `translateX(-${step * this.currentElement}%)`
        }


        this.registerInterval()
    }

    onPrevButton() {
        const step = (100/this.childrenLength)

        this.stopInterval()

        if (this.currentElement === 0) {
            this.currentElement = this.rootChildrenLength - 1
            this.slider.style.transform = `translateX(-${step * this.currentElement}%)`
        } else {
            this.currentElement--
            this.slider.style.transform = `translateX(-${step * this.currentElement}%)`
        }

        this.registerInterval()
    }

    registerInterval() {
        this.interval = setInterval(() => {
            this.currentElement++
            this.slider.style.transition = "1s"
            const step = (100/this.childrenLength)
            this.slider.style.transform = `translateX(-${step * this.currentElement}%)`
            if (this.currentElement === this.rootChildrenLength) {
                this.currentElement = 0
                setTimeout(() => {
                    this.slider.style.transition = "0s"
                    this.slider.style.transform = `translateX(0)`
                }, 1000)
            }
        }, 5000)
    }

    destroy() {
        clearInterval(this.interval)
    }
}




export default Slider