import React, { useState } from "react"
import { AccountLoginForm } from "./AccountLoginForm"
import { AccountRegistrationForm } from "./AccountRegistrationForm"

export const AccountAuth = () => {
  const [formType, setFormType] = useState<"login" | "registration">("login")
  const [successMessage, setSuccessMessage] = useState<null | string>(null)

  const onRegistration = () => {
    setFormType("login")
    setSuccessMessage("You have registered to LEMON!")
  }

  return formType === "login" ? (
    <AccountLoginForm
      setFormType={setFormType}
      successMessage={successMessage}
    />
  ) : (
    <AccountRegistrationForm
      setFormType={setFormType}
      onRegistration={onRegistration}
    />
  )
}
