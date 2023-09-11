import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "@pages/home/Page";
import {Recipes} from "@pages/recipes";
import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {Test} from "@pages/test";
import CreateRecipe from "@pages/create-recipe/Page";
import {logout, refresh} from "@app/http/user-api-calls";
import {authActions} from "@app/store/slices/auth-slice";
import {UserProfile} from "@pages/user-profile";

const publicRoutes = [
    { path: "/home", element: <Home /> },
    { path: "/test", element: <Test /> },
    { path: "/recipes", element: <Recipes /> },
    // { path: "/recipe/:id", element: () => <>Recipe ID</> },
    { path: "/user/:id", element: <UserProfile />}
]

const protectedRoutes = [
    // { path: "/admin", element: () => <>Admin</> },
    { path: "/recipe/create", element: <CreateRecipe /> },
]

const Router = () => {
    const authState = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const location = useLocation()

    useEffect(() => {
        if (authState.status !== "READY")
            return
        if (protectedRoutes.find((route) => route.path === location.pathname)) {
            refresh().catch(() => {
                    logout()
                    dispatch(authActions.logout())
                    localStorage.removeItem('user-token')
                })
        }
    }, [location])

    /** TODO: Change to normal loader */
    if (protectedRoutes.find((route) => route.path === location.pathname)
        && authState.status === "INITIAL") {
        return <>LOADING</>
    }

    return (
        <Routes>
            { publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}

            { authState.isAuthenticated &&
                protectedRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}

            <Route path="*" element={<Navigate to="/home" />} />
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default Router;