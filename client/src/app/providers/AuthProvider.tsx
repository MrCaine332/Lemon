import React, { useLayoutEffect } from "react"
import { authActions } from "@app/store/slices/auth-slice"
import { refresh } from "@app/http/user-api"
import { useAppDispatch } from "@app/store/store"

export type AuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    refresh()
      .then((response) => {
        localStorage.setItem("user-token", response.data.accessToken)
        dispatch(authActions.refresh(response.data.user))
      })
      .catch(() => {
        dispatch(authActions.setStatus("READY"))
      })
  }, [])

  return <>{children}</>
}

export default AuthProvider
