import React from 'react';
import Logo from "../../logo/Logo";
import logoImage from "../../../resources/logo/LogoWhite.png";
import Navbar from "../../navbar/Navbar";
import Copyrights from "../copyrights/Copyrights";
import "./FooterMobile.scss"
import googleIcon from "../../../resources/icons/GoogleIcon.png";
import facebookIcon from "../../../resources/icons/FacebookIcon.png";
import Search from "../../../templates/search/Search";
import {NavLink} from "react-router-dom";
import NavbarList from "../../navbar/navbar-list/NavbarList";

const FooterMobile: React.FC = () => {
    return (
        <div className="mobile-footer">
            <div className="mobile-footer__top">
                <div className="mobile-footer__logo">
                    <Logo logoImage={logoImage} />
                    <p><img src={googleIcon}/><img src={facebookIcon}/></p>
                </div>
                <div>
                    <nav className="mobile-footer__nav">
                        <NavbarList dropdowns={false} />
                    </nav>
                </div>
            </div>
            <hr className="separation-horizontal"/>
            <div className="mobile-footer__copyrights">
                <p>© 2016-2017 LEMON.<br/>ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
};

export default FooterMobile ;