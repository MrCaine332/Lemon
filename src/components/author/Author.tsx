import React from 'react'
import "./Author.scss"

import authorAvatar from "../../resources/images/AuthorAvatar.png"
import authorSignature from "../../resources/images/Signature.png"
import googleIcon from "../../resources/icons/GoogleIcon.png"
import facebookIcon from "../../resources/icons/FacebookIcon.png"

import BlockTitle from "../general/block-title/BlockTitle"
import {useAppSelector} from "../../hooks";

const Author: React.FC = () => {

    const styleState = useAppSelector(state => state.style)

    return (
        <div className="shadow-wide section padding_double-col author__wrap">
            <BlockTitle title={"Author"} />
            <div className="author">
                { styleState.windowWidth >= 360 &&
                    <div className="author__avatar">
                        <img src={authorAvatar} />
                    </div>
                }
                <div className="author__info">
                    <div className="author__info-header">
                        { styleState.windowWidth < 360 &&
                            <div className="author__avatar">
                                <img src={authorAvatar} />
                            </div>
                        }
                        <h4>Karen Gray</h4>
                        <p>United States</p>
                        <p><img src={googleIcon}/><img src={facebookIcon}/></p>
                    </div>
                    <hr className="separation-horizontal"/>
                    <div className="author__info-body">
                        <h3>About Lemon</h3>
                        <p>
                            Over the fifteen-year life span of Food.com,
                            we’ve learned that – in addition to eating – sharing is what you do best.
                            And thanks to the 20 million of you who come here each month,
                            we now have 500,000 recipes to show for it, more than anywhere
                            else in the digital universe. We also have tons crazy-tempting photos,
                            troves of recipe reviews and more than 2 million Facebook likes.
                            That’s a heck of a lot of Food. Thank you!
                        </p>
                        <div className="author__signature">
                            <img src={authorSignature} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;