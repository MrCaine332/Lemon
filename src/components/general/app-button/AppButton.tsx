import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./AppButton.scss"

interface IAppButton {
    type: string
    name: string
    onClick?: () => void
    to?: string
    className?: string
    activeClassName?: string
    disabled?: boolean
}

const AppButton: React.FC<IAppButton> = (props) => {

    return (
        // <div className="button__wrap">
        //     { props.type?.toLowerCase() === "button" &&
        //         <button type="button" className={props.className} onClick={props.onClick}>{props.name}</button> }
        //
        //     { props.type?.toLowerCase() === "link" && props.to &&
        //         <Link to={props.to} className={props.className} onClick={props.onClick}>{props.name}</Link> }
        // </div>

        <div className="button__wrap">
            { props.type?.toLowerCase() === "button" &&
                <button disabled={props.disabled} type="button" className={props.className} onClick={props.onClick}>{props.name}</button> }

            { props.type?.toLowerCase() === "link" && props.to &&
                <Link to={props.to} className={props.className} onClick={props.onClick}><span>{props.name}</span></Link> }
        </div>
    );
};

export default AppButton;