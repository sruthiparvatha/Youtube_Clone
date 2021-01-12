import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon  from '@material-ui/icons/CheckCircleSharp';
import "./ChannelRow.css";

function ChannelRow({image, channel, verified, subs,noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar src={image} 
            alt={channel}
            className="channelRow__logo"
            />
            
            <div className="channelRow__text">
    <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
            <button className="channelRow__subscribeBtn">Subscribe</button>
            
        </div>
    )
}

export default ChannelRow
