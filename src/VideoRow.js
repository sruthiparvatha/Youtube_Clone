import React from 'react';
import VerifiedIcon from '@material-ui/icons/CheckCircleSharp';
import './VideoRow.css';

function VideoRow({
    image,
    title,
    channel,
    verified,
    views,
    description,
    timestamp   

}) {
    return (
        <div className="videoRow">
            <img className="videoRow__thumbnail" src={image} alt={image}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel} {verified && <VerifiedIcon className="videoRow__verifyIcon" />} {views} views . {timestamp} ago</p>
                <p>{description}</p>
            </div>
   
        </div>
    )
}

export default VideoRow
