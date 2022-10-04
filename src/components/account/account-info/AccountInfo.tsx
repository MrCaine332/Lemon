import React from 'react';
import "./AccountInfo.scss"
import {useAppDispatch} from "../../../hooks";
import AppButton from "../../../templates/app-button/AppButton";
import {logout} from "../../../app/services/auth-services";
import {IAuthState} from "../../../types/slices";

const AccountInfo: React.FC<{ auth: IAuthState}> = ({ auth }) => {

    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="auth__info">
            {/*<p><b>{ auth.user.username }</b></p>*/}
            {/*<p><b>{ auth.user.email }</b></p>*/}
            <p>User Profile</p>
            <p>Add Recipe</p>
            <p>Saved Items</p>
            <p>Help</p>
            <p>Logout</p>

            <AppButton type="button" onClick={onLogout} className="primary">
                LOGOUT
            </AppButton>
        </div>
    );
};

export default AccountInfo;