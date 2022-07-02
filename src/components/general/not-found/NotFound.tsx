import React from 'react';
import "./NotFound.scss"
import BlockTitle from "../block-title/BlockTitle";
import errorImg from "../../../resources/images/404.png"
import {useNavigate} from "react-router-dom";

const NotFound: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="block_outline padding_single-col not-found__wrap">
                <BlockTitle title={"404"} />
                <div className="not-found">
                    <div className="not-found__img">
                        <img src={errorImg} alt=""/>
                    </div>
                    <div className="not-found__text">
                        <b>Sorry</b><br/>
                        WE COULDN'T<br/>
                        FIND THE PAGE
                    </div>
                </div>
                <div className="not-found__btn">
                    <button onClick={() => navigate(-1)}>BACK</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;