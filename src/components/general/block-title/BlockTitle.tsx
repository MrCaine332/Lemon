import React from "react";
import "./BlockTitle.scss"


const BlockTitle: React.FC<{title: string}> = ({ title }) => {
    return (
        <div className="block-header">
            <h3>{title}</h3>
            <hr className="separation-horizontal"/>
        </div>
    )
}

export default BlockTitle;