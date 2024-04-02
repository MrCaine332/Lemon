import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth-slice"
import { api } from "@app/http/index"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

/** TODO: Remove global window.store */
// @ts-ignore
window.store = store

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
