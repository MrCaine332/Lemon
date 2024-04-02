import React, { useRef } from "react"
import styles from "./Header.module.scss"
import { Section } from "@components/ui/section"
import { Logo } from "@components/common/logo"
import { useWindowEvent } from "@app/hooks/useWindowEvent"
import { Navbar } from "@components/common/navbar"
import { Account } from "@components/header"
import { MobileMenu } from "@components/common/mobile-menu"

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useWindowEvent("scroll", () => {
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
          <MobileMenu />
        </div>
      </Section>
    </header>
  )
}
