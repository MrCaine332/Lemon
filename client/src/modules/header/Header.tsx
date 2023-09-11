import React, {useRef} from "react"
import styles from "./Header.module.scss"
import {Section} from "@components/ui/section";
import {Account} from "@modules/header/components/account";
import {Logo} from "@components/logo";
import {Navbar} from "@components/navbar";
import {NavbarMobile} from "@components/navbar/NavbarMobile";
import {useWindowEvent} from "@app/hooks/useWindowEvent";

export const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null)

    useWindowEvent('scroll', () => {
        if (window.scrollY > 0) {
            headerRef.current?.classList.add(styles.headerSmall)
        } else {
            headerRef.current?.classList.remove(styles.headerSmall)
        }
    })

    return (
        <header ref={headerRef} className={styles.header}>
            <Section className={styles.headerSection}>
                <Logo />
                <Navbar />
                <div className={styles.headerDropdowns}>
                    <Account />
                    <NavbarMobile />
                </div>
            </Section>
        </header>
    )
}