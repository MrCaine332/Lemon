import React from 'react';
import "./AccountInfo.scss"
import {useAppDispatch, useAppSelector} from "../../../hooks";
import AppButton from "../../../templates/app-button/AppButton";
import {logout} from "../../../app/services/auth-services";
import {IAuthState} from "../../../types/slices";

import userIcon from "../../../resources/icons/user.png"
import addIcon from "../../../resources/icons/add.png"
import favoriteIcon from "../../../resources/icons/favorite.png"
import helpIcon from "../../../resources/icons/help.png"
import exitIcon from "../../../resources/icons/exit.png"

const AccountInfo: React.FC<{ auth: IAuthState}> = ({ auth }) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth).user

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="auth__info">
            <div className="auth_greeting">Good Morning, {user.username}</div>
            <hr className='separation-horizontal' />
            <div className='auth_info-item'>
                <img src={userIcon} className='account__icon' alt={''} />
                <AppButton type={'link'} to={`/profile/${user.id}`} className="secondary">
                    User Profile
                </AppButton>
            </div>
            <div className='auth_info-item'>
                <img src={addIcon} className='account__icon' alt={''} />
                <AppButton type={'link'} to={`/recipe/create`} className="secondary">
                    Add Recipe
                </AppButton>
            </div>
            <div className='auth_info-item'>
                <img src={favoriteIcon} className='account__icon' alt={''} />
                <AppButton type={'link'} to={`/profile/favorite`} className="secondary">
                    Saved Items
                </AppButton>
            </div>
            <hr className='separation-horizontal' />
            <div className='auth_info-item'>
                <img src={helpIcon} className='account__icon' alt={''} />
                <AppButton type={'link'} to={`/help`} className="secondary">
                    Saved Items
                </AppButton>
            </div>
            <div className='auth_info-item'>
                <img src={exitIcon} className='account__icon' alt={''} />
                <AppButton type={'button'} onClick={onLogout} className="secondary">
                    Logout
                </AppButton>
            </div>
        </div>
    );
};

export default AccountInfo;