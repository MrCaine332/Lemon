let elementDropdown: HTMLDivElement | null = null
let elementButton: HTMLDivElement | null = null

const ToggleAccountDropdown = (elButton: HTMLDivElement, elDropdown: HTMLDivElement) => {
    if (!elementDropdown) {
        elementDropdown = elDropdown
        elementButton = elButton
    }
    elDropdown.classList.toggle('account__dropdown-enabled')
}

const HideAccountDropdown = (event: MouseEvent) => {

    if (elementDropdown && elementButton && !elementDropdown.contains(event.target as Node) && !elementButton.contains(event.target as Node)) {
        if (elementDropdown.classList.contains("account__dropdown-enabled"))
            elementDropdown.classList.toggle("account__dropdown-enabled")
    }
}

window.addEventListener("mousedown", HideAccountDropdown)


export default ToggleAccountDropdown