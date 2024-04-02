import styles from "./AccountAuth.module.scss"
import { BlockTitle } from "@components/ui/block-title"
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import Icons from "@components/ui/icons"
import { registration } from "@app/http/user-api"
import { RegistrationCredentials } from "@app/types/request/bodies"
import { RegistrationApiError } from "@app/types/errors"
import { mapApiErrors } from "@app/helpers/map-errors"

const REGISTRATION_FORM = [
  {
    type: "email",
    placeholder: "Email",
    field: "email",
    autocomplete: "email",
  },
  {
    type: "text",
    placeholder: "Username",
    field: "username",
    autocomplete: "username",
  },
  {
    type: "password",
    placeholder: "Password",
    field: "password",
    autocomplete: "new-password",
  },
  {
    type: "password",
    placeholder: "Confirm Password",
    field: "passwordConfirmation",
    autocomplete: "new-password",
  },
]

type AccountRegistrationFormProps = {
  setFormType: React.Dispatch<React.SetStateAction<"login" | "registration">>
  onRegistration: () => void
}

export const AccountRegistrationForm = ({
  setFormType,
  onRegistration,
}: AccountRegistrationFormProps) => {
  const [credentials, setCredentials] = useState<RegistrationCredentials>({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  })

  const [errors, setErrors] = useState<RegistrationApiError>({})

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof RegistrationCredentials
  ) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await registration(credentials)
      if (response.status === 201) {
        onRegistration()
      }
    } catch (err) {
      const defaultErrorMessage =
        "We are sorry, something went wrong on our side. Please, try again later."
      const mappedErrors = mapApiErrors<RegistrationApiError>(
        err,
        defaultErrorMessage
      )
      setErrors(mappedErrors)
    }
  }

  const onFormTypeChange = (e: MouseEvent) => {
    setFormType("login")
    e.stopPropagation()
  }

  return (
    <>
      <BlockTitle title={"Sign up"} />

      <form className={styles.authForm} onSubmit={onSubmit}>
        {REGISTRATION_FORM.map((input, index) => (
          <Input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={credentials[input.field as keyof RegistrationCredentials]}
            onChange={(e) =>
              onInputChange(e, input.field as keyof RegistrationCredentials)
            }
            inputBoxClassName={styles.inputBox}
            className={styles.input}
            autoComplete={input.autocomplete}
            error={errors[input.field as keyof RegistrationCredentials]}
          />
        ))}

        <Button
          type={"submit"}
          styleType={"outlined"}
          className={styles.submitButton}
        >
          SIGN UP
        </Button>

        <div className={styles.authOther}>
          <Button type={"button"}>
            <Icons name={"facebook"} size={22} />
          </Button>
          <Button type={"button"}>
            <Icons name={"google"} size={22} />
          </Button>
        </div>

        <p className={"textBody " + styles.formChanger}>
          By joining LEMON, you agree to our
          <br />
          <span>
            <Button type={"button"} className={styles.formChangerButton}>
              Terms Of Service
            </Button>
          </span>
        </p>

        <p className={"textBody " + styles.formChanger}>
          Already have an account?&nbsp;
          <span>
            <Button
              type={"button"}
              className={styles.formChangerButton}
              onClick={onFormTypeChange}
            >
              Log in!
            </Button>
          </span>
        </p>
      </form>
    </>
  )
}
