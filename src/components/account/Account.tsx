import React, { useRef } from "react";
import "./Account.scss"
import userIcon from "../../resources/icons/user.png"
import ToggleAccountDropdown from "../../resources/scripts/showAccountDropdown";
import AccountDropdown from "./account-dropdown/AccountDropdown";

const Account: React.FC = () => {

    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    return (
        <div className="account__wrap">
            <div ref={buttonRef}
                 className="account__button"
                 onClick={() => ToggleAccountDropdown(buttonRef.current!, dropdownRef.current!)}>

                <img src={userIcon} alt="" />
            </div>
            <div ref={dropdownRef} className="account__dropdown section shadow-narrow">
                <AccountDropdown />
            </div>
        </div>
    )
}

export default Account