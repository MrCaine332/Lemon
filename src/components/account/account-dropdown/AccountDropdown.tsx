import React from 'react';
import "./AccountDropdown.scss"
import AccountAuth from "../account-auth/AccountAuth";
import { authActions } from "../../../app/slices/auth-slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const AccountDropdown: React.FC = () => {

    const auth = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(authActions.logout())
    }

    return (
        <div className="account__dropdown-content">
            {
                auth.isAuthenticated ?
                    <div>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                    : <AccountAuth auth={auth} />
            }
        </div>
    );
};

export default AccountDropdown;