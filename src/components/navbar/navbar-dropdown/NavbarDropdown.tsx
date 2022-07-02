import React, {useEffect, useRef} from "react";
import "./NavbarDropdown.scss"
import {Link} from "react-router-dom";
import {INavbarDropdown} from "../../../types";
import AppButton from "../../general/app-button/AppButton";

const NavbarDropdown: React.FC<INavbarDropdown> = ({ items }) => {

    return (
        <div className="navbar__dropdown-wrap">
            <div className="navbar__dropdown-content">
                { items.map((item) => {
                    return (
                        <div key={item.linkTitle} className="navbar__dropdown-link">
                            <AppButton type="link" to={item.linkAddress} name={item.linkTitle} className="secondary" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavbarDropdown