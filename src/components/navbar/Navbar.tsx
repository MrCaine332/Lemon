import React from "react";
import "./Navbar.scss"
import Search from "../general/search/Search";
import NavbarList from "./navbar-list/NavbarList";
import {INavbar} from "../../types";


const Navbar: React.FC<INavbar> = ({ dropdowns, search, isVertical, linkOnClick }) => {
    return (
        <nav className={isVertical ? "navbar navbar_vertical" : "navbar"} >
            <NavbarList dropdowns={dropdowns} linkOnClick={linkOnClick} />
            { search && <Search placeholder={"FIND A RECIPE"} /> }
        </nav>
    )
}

export default Navbar