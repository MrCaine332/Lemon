import React, {useState} from "react";
import {AccountLoginForm} from "@modules/header/components/account/account-auth/AccountLoginForm";
import {AccountRegistrationForm} from "@modules/header/components/account/account-auth/AccountRegistrationForm";

type AccountForm = {
    setFormType: React.Dispatch<React.SetStateAction<"login" | "registration">>
}

export type LoginForm = AccountForm & { successMessage: null | string }
export type RegistrationForm = AccountForm & { onRegistration: () => void }

export const AccountAuth = () => {
    const [formType, setFormType] = useState<'login' | 'registration'>('login')
    const [successMessage, setSuccessMessage] = useState<null | string>(null)

    const onRegistration = () => {
        setFormType("login")
        setSuccessMessage("You have registered to LEMON!")
    }

    return formType === 'login'
        ? <AccountLoginForm setFormType={setFormType} successMessage={successMessage} />
        : <AccountRegistrationForm setFormType={setFormType} onRegistration={onRegistration} />
}