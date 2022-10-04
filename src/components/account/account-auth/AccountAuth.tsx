import React, {useEffect} from "react";
import "./AccountAuth.scss"
import {Link} from "react-router-dom";
import GoogleIcon from "../../../resources/icons/GoogleIcon.png"
import FacebookIcon from "../../../resources/icons/FacebookIcon.png"
import BlockTitle from "../../../templates/block-title/BlockTitle";
import {authActions} from "../../../app/slices/auth-slice";
import AppButton from "../../../templates/app-button/AppButton";
import {useAppDispatch} from "../../../hooks";
import {login, registration} from "../../../app/services/auth-services";
import {IForms} from "../../../types/components";
import {IAuthState} from "../../../types/slices";

const forms: IForms = {
    LOGIN: [
        {type: "text", placeholder: "email or username", credentialType: "login"},
        {type: "password", placeholder: "password", credentialType: "password"}
    ],
    REGISTRATION: [
        {type: "text", placeholder: "email", credentialType: "email"},
        {type: "text", placeholder: "username", credentialType: "username"},
        {type: "password", placeholder: "password", credentialType: "password"},
        {type: "password", placeholder: "confirm password", credentialType: "confirmedPassword"}
    ]
}

const AccountAuth: React.FC<{auth: IAuthState}> = ({ auth }) => {

    const dispatch = useAppDispatch()

    const onFormCredentialsChange = (event: React.ChangeEvent<HTMLInputElement>, credentialType: string) => {
        dispatch(authActions.setFormCredentials({field: credentialType, value: event.target.value}))
    }

    const onFormTypeChange = () => {
        dispatch(authActions.toggleFormType())
    }

    const onSubmit = () => {
        if (auth.formType.type === "LOGIN")
            dispatch(login())
        if (auth.formType.type === "REGISTRATION")
            dispatch(registration())
    }

    return (
        <>
            <BlockTitle title={auth.formType.text} />
            <form className="auth__form">
                { forms[auth.formType.type as keyof typeof forms].map((input) => (
                    <input
                        key={input.credentialType}
                        value={auth.formCredentials[input.credentialType as keyof typeof auth.formCredentials]}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={e => onFormCredentialsChange(e, input.credentialType)}
                    />
                ))}

                { auth.formType.type === "LOGIN" &&
                    <div className="auth__form-utilities">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link to={"/"}>
                            Forgot your password?
                        </Link>
                    </div>
                }

                <div className="auth__button">
                    <AppButton type="button" disabled={auth.isFetching} onClick={onSubmit} className="primary">
                        {auth.formType.type === "LOGIN" ? "SIGN IN" : "SIGN UP"}
                    </AppButton>
                </div>
                <div className="auth__icons">
                    <img src={FacebookIcon} alt=""/>
                    <img src={GoogleIcon} alt=""/>
                </div>
                { auth.formType.type === "LOGIN" &&
                    <label className="auth__change-form">
                        Don't have an account?&nbsp;
                        <AppButton type="button" className="secondary" onClick={onFormTypeChange}>
                            Sign Up
                        </AppButton>
                    </label> }
                { auth.formType.type === "REGISTRATION" &&
                    <>
                        <div className="auth__terms">
                            <p>By joining LEMON, you agree to our<br/><span>Terms of Service</span></p>
                        </div>
                        <label className="auth__change-form">
                            Already have an account?&nbsp;
                            <AppButton type="button" className="secondary" onClick={onFormTypeChange}>
                                Sign In
                            </AppButton>
                        </label>
                    </> }
            </form>
        </>
    )
}

export default AccountAuth;