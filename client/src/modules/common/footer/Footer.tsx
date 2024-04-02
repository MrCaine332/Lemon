import React from "react"
import styles from "./Footer.module.scss"
import { Section } from "@components/ui/section"
import { Button } from "@components/ui/button"
import Icons from "@components/ui/icons"
import { Divider } from "@components/ui/divider"
import { Logo } from "@components/common/logo"
import { NavbarList } from "@components/common/navbar"

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerDesktopWrapper}>
        <FooterDesktop />
      </div>
      <div className={styles.footerMobileWrapper}>
        <FooterMobile />
      </div>
    </footer>
  )
}

const FooterDesktop = () => {
  return (
    <Section className={styles.footer}>
      <Logo logoType={"light"} />
      <NavbarList listClassName={styles.footerNavbar} />
      <div className={styles.footerUtils}>
        <p className={"textBody " + styles.footerCopyrights}>
          © 2016-2017 LEMON. ALL RIGHTS RESERVED
        </p>
        <div className={styles.footerSocials}>
          <Button type={"button"}>
            <Icons name={"facebook"} size={16} />
          </Button>
          <Button type={"button"}>
            <Icons name={"google"} size={18} />
          </Button>
        </div>
      </div>
    </Section>
  )
}

const FooterMobile = () => {
  return (
    <Section className={styles.footer}>
      <div className={styles.footerMobileTop}>
        <div className={styles.footerMobileTopCol}>
          <Logo logoType={"light"} />
          <div className={styles.footerSocials}>
            <Button type={"button"}>
              <Icons name={"facebook"} size={16} />
            </Button>
            <Button type={"button"}>
              <Icons name={"google"} size={18} />
            </Button>
          </div>
        </div>
        <NavbarList
          listClassName={[styles.footerNavbar, styles.footerMobileNavbar].join(
            " "
          )}
        />
      </div>
      <Divider />
      <p className={"textBody " + styles.footerCopyrights}>
        © 2016-2017 LEMON. ALL RIGHTS RESERVED
      </p>
    </Section>
  )
}
