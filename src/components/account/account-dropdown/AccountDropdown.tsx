import React from 'react';
import "./AccountDropdown.scss"
import AccountAuth from "../account-auth/AccountAuth";
import { authActions } from "../../../app/slices/auth-slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import AccountInfo from "../account-info/AccountInfo";

const AccountDropdown: React.FC = () => {

    const auth = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

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