import React from 'react';
import { Link } from "react-router-dom";
import "./AppButton.scss"

export interface IAppButton {
    type: 'button' | 'link'
    name?: string
    onClick?: () => void
    to?: string
    className?: string
    disabled?: boolean
    children?: React.ReactNode
}

const AppButton: React.FC<IAppButton> = (props) => {
    return (
        <>
            { props.type.toLowerCase() === "button" &&
                <button type="button"
                        onClick={props.onClick}
                        className={`${props.className} ${props.disabled && "button_disabled"}`}
                        disabled={props.disabled}
                >
                    {props.children}
                </button> }

            { props.type.toLowerCase() === "link" && props.to &&
                <Link to={props.to}
                      className={props.className}
                      onClick={props.onClick}
                >
                    {props.children}
                </Link> }
        </>
    );
};

export default AppButton;