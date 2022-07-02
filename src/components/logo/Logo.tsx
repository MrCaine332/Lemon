import React from "react";
import "./Logo.scss"
import {Link} from "react-router-dom";

const Logo: React.FC<{logoImage: string}> = ({ logoImage }) => {
    return (
        <div className="logo">
            <Link to="/"><img src={logoImage} alt={"logo"}/></Link>
        </div>
    )
}

export default Logo