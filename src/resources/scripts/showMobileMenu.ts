
const ShowMobileMenu = (menu: HTMLDivElement, hamburger: HTMLDivElement) => {
    menu.classList.toggle("mobile-menu__active")
    hamburger.classList.toggle("hamburger_rotated")
    const menuChild = menu.firstChild as HTMLDivElement
    if (menuChild.classList.contains("mobile-menu__auth_active")) {
        menuChild.classList.toggle("mobile-menu__auth_active")
    }
}

export default ShowMobileMenu