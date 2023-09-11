import React from "react";
import styles from "./Logo.module.scss"
import {Link} from "react-router-dom";
import logoImageDark from "@assets/logo/LogoDark.png"
import logoImageLight from "@assets/logo/LogoLight.png"

type LogoProps = {
    logoType?: 'dark' | 'light'
    className?: string
}

export const Logo = ({ logoType = 'dark', className }: LogoProps) => {
    return (
        <div className={[
                styles.logo,
                className
            ].join(' ')}>
            <Link to="/"><img src={logoType === 'dark' ? logoImageDark : logoImageLight } alt={"logo"}/></Link>
        </div>
    )
}