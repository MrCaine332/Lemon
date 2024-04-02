import React from "react"
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { useAppSelector } from "@app/store/store"

import { Home } from "@pages/home"
import { Recipes } from "@pages/recipes"
import { Recipe } from "@pages/recipe"
import { RecipeCreate } from "@pages/recipe/create"
import { RecipeEdit } from "@pages/recipe/edit"
import { ProfileRecipes } from "@pages/profile/recipes"
import { NotImplemented } from "@pages/not-implemented"

const publicRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipe/:id", element: <Recipe /> },
]

const protectedRoutes = [
  { path: "/recipe/:id/edit", element: <RecipeEdit /> },
  { path: "/recipe/create", element: <RecipeCreate /> },
  { path: "/profile/recipes", element: <ProfileRecipes /> },
]

const Router = () => {
  const auth = useAppSelector((state) => state.auth)

  /** TODO: Change to normal loader */
  if (auth.status === "INITIAL") {
    return <>LOADING</>
  }

  return (
    <Routes>
      <Route index element={<Navigate to={"/home"} />} />

      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {auth.isAuthenticated &&
        protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

      <Route path="*" element={<NotImplemented />} />
    </Routes>
  )
}

export default Router
