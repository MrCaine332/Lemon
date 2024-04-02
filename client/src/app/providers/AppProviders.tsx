import React from "react"
import store from "@app/store/store"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import AuthProvider from "@app/providers/AuthProvider"



export type AppProvidersProps = {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default AppProviders
