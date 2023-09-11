import React from 'react';
import {useAppDispatch} from "@app/hooks/store";
import {useQuery} from "@tanstack/react-query";
import {authActions} from "@app/store/slices/auth-slice";
import {refresh} from "@app/http/user-api-calls";

export type AuthProviderProps = {
	children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const dispatch = useAppDispatch()

	useQuery({
		queryKey: ["refresh"],
		retry: 0,
		queryFn: () => refresh(),
		onSuccess: ({ data }) => {
			localStorage.setItem('user-token', data.accessToken)
			dispatch(authActions.refresh(data.user))
		},
		onError: () => {
			dispatch(authActions.setStatus("READY"))
		}
	})

	return (<>{children}</>);
};

export default AuthProvider;