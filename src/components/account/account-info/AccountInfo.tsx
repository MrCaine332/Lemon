import React from 'react';
import "./AccountInfo.scss"
import {authActions} from "../../../app/slices/auth-slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import AppButton from "../../general/app-button/AppButton";
import {IAuthState} from "../../../types";

const AccountInfo: React.FC<{ auth: IAuthState}> = ({ auth }) => {

    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(authActions.logout())
    }

    const test = () => {
        console.log(auth)
    }

    return (
        <div className="auth__info">
            <p><b>{ auth.user.username }</b></p>
            <p><b>{ auth.user.email }</b></p>
            <AppButton type="button" name="Logout" onClick={onLogout} className="secondary" />
            <AppButton type="button" name="test" onClick={test} className="primary" />
        </div>
    );
};

export default AccountInfo;