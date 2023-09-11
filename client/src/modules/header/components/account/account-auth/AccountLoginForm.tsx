import styles from './AccountAuth.module.scss'
import {BlockTitle} from "@components/ui/block-title";
import {LoginForm} from "@modules/header/components/account/account-auth/AccountAuth";
import React, {ChangeEvent, FormEvent, MouseEvent, useState} from "react";
import {Input} from "@components/ui/input";
import {Checkbox} from "@components/ui/checkbox";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {login, registration} from "@app/http/user-api-calls";
import {useAppDispatch} from "@app/hooks/store";
import {authActions} from "@app/store/slices/auth-slice";
import {LoginCredentials} from "@app/types/request/bodies";
import {mapErrors} from "@app/helpers/map-errors";
import {LoginApiError} from "@app/types/errors";


const LOGIN_FORM = [
	{ type: 'email', placeholder: 'Email', field: 'email', autocomplete: 'email' },
	{ type: 'password', placeholder: 'Password', field: 'password', autocomplete: 'current-password' },
]


export const AccountLoginForm = ({ setFormType, successMessage }: LoginForm) => {
	const [credentials, setCredentials] = useState<LoginCredentials>({
		email: '',
		password: '',
		rememberMe: false
	})

	const [error, setError] = useState<string | null>("")

	const dispatch = useAppDispatch()

	const onInputChange = (e: ChangeEvent<HTMLInputElement>, field: keyof LoginCredentials) => {
		setCredentials(prev => ({
			...prev,
			[field]: e.target.value
		}))
		if (error)
			setError(null)
	}

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			const response = await login(credentials)
			dispatch(authActions.login(response.data.user))
		} catch (err) {
			const defaultErrorMessage = "We are sorry, something went wrong on our side. Please, try again later."
			const mappedErrors = mapErrors<LoginApiError>(err, defaultErrorMessage)
			const error = mappedErrors.login || mappedErrors.default || null
			setError(error)
		}
	}

	const onFormTypeChange = (e: MouseEvent) => {
		setFormType('registration')
		e.stopPropagation()
	}

	/** TODO: Add styles for successMessage */
	return (
		<>
			<BlockTitle title={'Log in'} />
			{ successMessage
				? <div className={'textBody ' + styles.successMessage}>
					{ successMessage }
				</div>
				: null
			}

			<form className={styles.authForm} onSubmit={onSubmit}>
				{
					LOGIN_FORM.map((input, index) => (
						<Input key={index}
						       type={input.type}
						       placeholder={input.placeholder}
						       value={credentials[input.field as keyof Omit<LoginCredentials, 'rememberMe'>]}
						       onChange={(e) => onInputChange(e, input.field as keyof LoginCredentials)}
						       inputBoxClassName={styles.inputBox}
						       className={styles.input}
						       autoComplete={input.autocomplete}
						       error={!!error}
						/>
					))
				}

				{ error
					? <p className={'textBody ' + styles.loginError}>
						{error}
					</p>
					: null

				}

				<div className={styles.authFormUtils}>
					<Checkbox id={'rememberMe'}
					          label={'Remember me'}
					          checked={credentials.rememberMe}
					          onChange={(event) =>
						          setCredentials(prev => ({
							          ...prev,
							          rememberMe: event.target.checked
								  }))}
					/>
					<Button type={"button"} className={styles.forgotButton}>Forgot your password?</Button>
				</div>

				<Button type={"submit"}
				        styleType={"outlined"}
				        className={styles.submitButton}>
					LOG IN
				</Button>

				<div className={styles.authOther}>
					<Button type={"button"}>
						<Icons name={"facebook"} size={20} />
					</Button>
					<Button type={"button"}>
						<Icons name={"google"} size={22} />
					</Button>
				</div>

				<p className={'textBody ' + styles.formChanger}>
					Don't have an account?&nbsp;
						<Button type={"button"}
						        className={styles.formChangerButton}
						        onClick={onFormTypeChange}>
							Sign up!
						</Button>
				</p>
			</form>
		</>
	);
};