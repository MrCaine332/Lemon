import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth-slice"
import homeReducer from "./slices/home-slice"
import recipesReducer from "./slices/recipes-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
        recipes: recipesReducer,
    }
})

/** TODO: Remove global window.store */
// @ts-ignore
window.store = store

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch