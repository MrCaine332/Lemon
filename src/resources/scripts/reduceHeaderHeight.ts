const RegisterChangeHeaderHeight = (header: HTMLDivElement) => {

    const changeHeaderHeight = (event: Event) => {
        if (window.scrollY >= 80)
            if (!header.classList.contains("header_small")) {
                header.classList.add("header_small")
            }
        if (window.scrollY < 80) {
            if (header.classList.contains("header_small")) {
                header.classList.remove("header_small")
            }
        }
    }

    document.addEventListener("scroll", changeHeaderHeight)
}

export default RegisterChangeHeaderHeight