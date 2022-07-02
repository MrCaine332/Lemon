import React from 'react'
import facebookIcon from "../../../resources/icons/FacebookIcon.png"
import googleIcon from "../../../resources/icons/GoogleIcon.png"
import "./Copyrights.scss"

const Copyrights: React.FC = () => {
    return (
        <div className="copyrights">
            <p>© 2016-2017 LEMON. ALL RIGHTS RESERVED</p>
            <p><img src={googleIcon}/><img src={facebookIcon}/></p>
        </div>
    )
}

export default Copyrights;