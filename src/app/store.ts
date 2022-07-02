import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth-slice"
import homeReducer from "./slices/home-slice"
import recipesReducer from "./slices/recipes-slice"
import styleReducer from "./slices/style-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
        recipes: recipesReducer,
        style: styleReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch