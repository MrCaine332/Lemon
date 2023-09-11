import React from 'react';
import styles from "./Footer.module.scss"
import {Logo} from "@components/logo";
import {Section} from "@components/ui/section";
import {NavbarList} from "@components/navbar/navbar-list";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {Divider} from "@components/ui/divider";

export const Footer = () => {
    return (
        <>
            <div className={styles.footerDesktopWrapper}>
                <FooterDesktop />
            </div>
            <div className={styles.footerMobileWrapper}>
                <FooterMobile />
            </div>
        </>
    );
};

const FooterDesktop = () => {
    return (
        <Section className={styles.footer}>
            <Logo logoType={'light'} />
            <NavbarList listClassName={styles.footerNavbar} noDropdowns />
            <div className={styles.footerUtils}>
                <p className={'textBody ' + styles.footerCopyrights}>
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
    );
};

const FooterMobile = () => {
    return (
        <Section className={styles.footer}>
            <div className={styles.footerMobileTop}>
                <div className={styles.footerMobileTopCol}>
                    <Logo logoType={'light'} />
                    <div className={styles.footerSocials}>
                        <Button type={"button"}>
                            <Icons name={"facebook"} size={16} />
                        </Button>
                        <Button type={"button"}>
                            <Icons name={"google"} size={18} />
                        </Button>
                    </div>
                </div>
                <NavbarList listClassName={[
                        styles.footerNavbar,
                        styles.footerMobileNavbar
                    ].join(' ')} noDropdowns />
            </div>
            <Divider />
            <p className={'textBody ' + styles.footerCopyrights}>
                © 2016-2017 LEMON. ALL RIGHTS RESERVED
            </p>
        </Section>
    );
};