import React from "react";
import "./Navbar.scss"
import Search from "../../templates/search/Search";
import NavbarList from "./navbar-list/NavbarList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {homeActions} from "../../app/slices/home-slice";
import {INavbar} from "../../types/components";


const Navbar: React.FC<INavbar> = ({ dropdowns, links, search, isVertical, linkOnClick }) => {

    const searchString = useAppSelector(state => state.home).searchString
    const dispatch = useAppDispatch()

    const onSearchStringChange = (event: React.ChangeEvent<HTMLInputElement>) :void => {
        dispatch(homeActions.setSearchString(event.target.value))
    }

    return (
        <nav className={isVertical ? "navbar navbar_vertical" : "navbar"} >
            { links && <NavbarList dropdowns={dropdowns} linkOnClick={linkOnClick} /> }
            { search && <Search value={searchString} onChange={onSearchStringChange} placeholder={"FIND A RECIPE"} /> }
        </nav>
    )
}

export default Navbar