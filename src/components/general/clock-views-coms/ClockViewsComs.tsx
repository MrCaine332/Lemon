import React from 'react';
import clockIcon from "../../../resources/icons/ClockIcon.png";
import commentIcon from "../../../resources/icons/CommentIcon.png";
import viewIcon from "../../../resources/icons/ViewIcon.png";
import "./ClockViewsComs.scss"

interface IClockViewsComs {
    cookingTime: number
    commentsCount: number
    viewCount: number
}

const ClockViewsComs: React.FC<IClockViewsComs> = ({ cookingTime, commentsCount, viewCount }) => {
    return (
        <div className="clock-views-coms">
            <img src={clockIcon} /><span>{cookingTime}</span>
            <hr className="separation-vertical"/>
            <img src={commentIcon} /><span>{commentsCount}</span>
            <img src={viewIcon} /><span>{viewCount}</span>
        </div>
    );
};

export default ClockViewsComs;