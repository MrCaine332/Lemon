
const Slider = (slider: HTMLDivElement, dots?: HTMLDivElement | null) => {
    const itemsLength = slider.children.length
    slider.style.width = `${100 * itemsLength}%`
    dots?.children.item(0)!.classList.add("slider__dot_active")

    let number: number = 0

    return setInterval(() => {
        if (dots) {
            dots.children.item(number)!.classList.toggle("slider__dot_active")
            number++
            if (number > itemsLength - 1)
                number = 0
            dots.children.item(number)!.classList.toggle("slider__dot_active")
        }

        slider.style.transition = "1s"
        slider.style.transform = `translateX(-${100 / itemsLength}%)`
        setTimeout(() => {
            const removedChild = slider.firstChild
            slider.firstChild!.remove()
            slider.style.transition = "none"
            slider.style.transform = "translateX(0)"
            slider.appendChild(removedChild as Node)
        }, 1000)
    }, 5000)
}

export default Slider