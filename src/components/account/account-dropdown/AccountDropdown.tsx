import React from 'react';
import "./AccountDropdown.scss"
import AccountAuth from "../account-auth/AccountAuth";
import { useAppSelector } from "../../../hooks";
import AccountInfo from "../account-info/AccountInfo";

const AccountDropdown: React.FC = () => {

    const auth = useAppSelector(state => state.auth)

    return (
        <div className="account__dropdown-content">
            {
                auth.isAuthenticated ?
                    <AccountInfo auth={auth} />
                    : <AccountAuth auth={auth} />
            }
        </div>
    );
};

export default AccountDropdown;