import React from 'react';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
             <SidebarRow selected title="Home" Icon={HomeSharpIcon} />
             <SidebarRow title="Trending" Icon={WhatshotSharpIcon} />
             <SidebarRow title="Subscriptions" Icon={SubscriptionsSharpIcon}/>
             <hr></hr>
             <SidebarRow title="Library" Icon={VideoLibrarySharpIcon} />
             <SidebarRow title="History" Icon={HistorySharpIcon} />
             <SidebarRow title="Your videos" Icon={OndemandVideoSharpIcon} />
             <SidebarRow title="Watch later" Icon={WatchLaterSharpIcon} />
             <SidebarRow title="Liked videos" Icon={ThumbUpAltSharpIcon} />
             <SidebarRow title="Show more" Icon={ExpandMoreSharpIcon} />
            <hr></hr>

        </div>
    )
}

export default Sidebar
