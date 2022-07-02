import React, {useEffect, useRef} from "react"

import "./Header.scss"
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ReduceHeaderHeight from "../../resources/scripts/reduceHeaderHeight";

import logoImage from "../../resources/logo/LemonLogo.png"
import Account from "../account/Account";


const Header: React.FC = () => {

    const headerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ReduceHeaderHeight(headerRef.current!)
    }, [])

    return (
        <header ref={headerRef} className="header section shadow-wide">
            <Logo logoImage={logoImage} />
            <Navbar dropdowns={true} search={true} isVertical={false} />
            <Account />
        </header>
    )
}

export default Header