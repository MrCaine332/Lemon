import React from 'react'

import authorAvatar from "@assets/images/AuthorAvatar.png"
import authorSignature from "@assets/images/Signature.png"

import styles from "./HomeAuthor.module.scss"
import {BlockTitle} from "@components/ui/block-title";
import {Section} from "@components/ui/section";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {Divider} from "@components/ui/divider";

export const HomeAuthor = () => {

    return (
        <Section className={styles.authorWrapper}>
            <BlockTitle title={"Author"} />
            <div className={styles.author}>
                <header className={styles.authorHeader}>
                    <div className={styles.authorAvatar}>
                        <img src={authorAvatar}/>
                    </div>
                    <div className={styles.authorInfo}>
                        <h4 className={'textHeader4'}>Karen Gray</h4>
                        <p className={'textBody'}>United States</p>

                        <div className={styles.authorSocials}>
                            <Button type={"button"}>
                                <Icons name={"facebook"} size={16}/>
                            </Button>
                            <Button type={"button"}>
                                <Icons name={"google"} size={18}/>
                            </Button>
                        </div>
                        <Divider className={styles.authorDivider}/>
                    </div>
                </header>
                <div className={styles.authorBody}>
                    <h4 className={'textHeader3 ' + styles.authorBodyTitle}>About Lemon</h4>
                    <p className={'textBody'}>
                        Over the fifteen-year life span of Food.com,
                        we’ve learned that – in addition to eating – sharing is what you do best.
                        And thanks to the 20 million of you who come here each month,
                        we now have 500,000 recipes to show for it, more than anywhere
                        else in the digital universe. We also have tons crazy-tempting photos,
                        troves of recipe reviews and more than 2 million Facebook likes.
                        That’s a heck of a lot of Food. Thank you!
                    </p>
                    <div className={styles.authorSignature}>
                        <img src={authorSignature} />
                    </div>
                </div>
            </div>
        </Section>
    );
};