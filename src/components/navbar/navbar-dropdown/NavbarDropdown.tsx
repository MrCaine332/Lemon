import React from "react";
import "./NavbarDropdown.scss"
import AppButton from "../../../templates/app-button/AppButton";
import {INavbarDropdown} from "../../../types/components";

const NavbarDropdown: React.FC<INavbarDropdown> = ({items}) => {

    return (
        <div className="navbar__dropdown-wrap">
            <div className="navbar__dropdown-content">
                {items.map((item) => (
                    <div key={item.linkTitle} className="navbar__dropdown-link">
                        <AppButton type="link" to={item.linkAddress} className="secondary">
                            {item.linkTitle}
                        </AppButton>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavbarDropdown