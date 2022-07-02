import React, { useEffect } from "react"

import "./App.scss"
import "./resources/styles/link/link.scss"
import "./resources/styles/input/input.scss"
import "./resources/styles/select/select.scss"
import "./resources/styles/line/hr.scss"
import "./resources/styles/headers/headers.scss"
import "./resources/styles/button/button.scss"

import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HeaderMobile from "./components/header/header-mobile/HeaderMobile";
import FooterMobile from "./components/footer/footer-mobile/FooterMobile";
import {getFeaturedRecipes, getNewest, getTodaySelection} from "./app/services/home-services";

import {styleActions} from "./app/slices/style-slice";
import {useAppDispatch, useAppSelector, useWindowSize} from "./hooks";


const App: React.FC = () => {

    const windowSize = useWindowSize()
    const dispatch = useAppDispatch()

    const styleState = useAppSelector(state => state.style)

    useEffect(() => {
        dispatch(getTodaySelection())
        dispatch(getNewest())
        dispatch(getFeaturedRecipes())
    }, [dispatch])

    useEffect(() => {
        dispatch(styleActions.setWindowDimension(windowSize))
    }, [dispatch, windowSize])

    return (
        <BrowserRouter>
            <div className="container">
                <div className="header__wrap">
                    { styleState.windowWidth > 920 ? <Header /> : <HeaderMobile />}
                </div>
                <Router />
                { styleState.windowWidth > 920 ? <Footer /> : <FooterMobile />}
            </div>
        </BrowserRouter>
    )
}

export default App;
