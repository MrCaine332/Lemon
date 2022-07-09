import React from 'react';
import "./Footer.scss"
import Logo from "../logo/Logo";
import logoImage from "../../resources/logo/LogoWhite.png"
import Navbar from "../navbar/Navbar";
import Copyrights from "./copyrights/Copyrights";

const Footer: React.FC = () => {
    return (
        <div className="padding_footer block_outline footer">
            <Logo logoImage={logoImage} />
            <Navbar dropdowns={false} links={true} search={false} isVertical={false} />
            <Copyrights />
        </div>
    );
};

export default Footer;