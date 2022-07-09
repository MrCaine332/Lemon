import React, {useEffect, useRef} from 'react';
import Logo from "../../logo/Logo";
import logoImage from "../../../resources/logo/LemonLogo.png";
import "./HeaderMobile.scss"
import ShowMobileMenu from "../../../resources/scripts/showMobileMenu";
import Search from "../../general/search/Search";
import AppButton from "../../general/app-button/AppButton";
import Navbar from "../../navbar/Navbar";
import AccountAuth from "../../account/account-auth/AccountAuth";
import {useAppSelector} from "../../../hooks";

const HeaderMobile: React.FC = () => {
    const auth = useAppSelector(state => state.auth)
    const styleState = useAppSelector(state => state.style)

    const menuRef = useRef<HTMLDivElement>(null)
    const hamburgerRef = useRef<HTMLDivElement>(null)

    const hamburgerOnClick = () => {
        ShowMobileMenu(menuRef.current!, hamburgerRef.current!)
    }

    const displayAccount = () => {
        const menu = menuRef.current!.firstChild as HTMLDivElement
        menu.classList.toggle("mobile-menu__auth_active")
    }

    return (
        <>
            <header className="header-mobile">
                <Logo logoImage={logoImage}/>
                <div className="header-mobile__right">
                    {styleState.windowWidth >= 440 && <Navbar dropdowns={false} links={false} search={true} isVertical={false} />}
                    <div className="hamburger__wrap" onClick={hamburgerOnClick}>
                        <div ref={hamburgerRef} className="hamburger"/>
                    </div>
                </div>
            </header>
            <div ref={menuRef} className="mobile-menu__wrap">
                <div className="mobile__menu">
                    <div className="mobile-menu__item">
                        <nav className="mobile-menu__nav">
                            <Navbar dropdowns={false}
                                    links={true}
                                    search={styleState.windowWidth < 440}
                                    isVertical={true}
                                    linkOnClick={hamburgerOnClick} />
                            <hr className="separation-horizontal"/>
                            <h3 onClick={displayAccount}>MY ACCOUNT</h3>
                        </nav>
                    </div>
                    { auth.isAuthenticated ?
                        <div className="mobile-menu__item">
                            Authenticated
                        </div> :
                        <div className="mobile-menu__item">
                            <div className="mobile-menu__auth">
                                <AppButton type="button" name="BACK" onClick={displayAccount} className="primary"/>
                                <AccountAuth auth={auth}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default HeaderMobile;