import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import ChannelImage from "./images/searchPage1.png";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import Image1 from './images/vr1.jpg';
import Image2 from './images/vr2.jpg';
import Image3 from './images/vr3.jpg';
import Image4 from './images/vr4.jpg';
import Image5 from './images/vr5.jpg';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            
            <ChannelRow 
            image={ChannelImage}
            channel="Big Hit Labels"
            verified
            subs="44.9M"
            noOfVideos="423"
            description="Welcome to the YouTube Clone Channel of Big Hit Labels, the content hub for Big Hit Entertainment."
            />
            <hr/>
            <h4>Latest from BTS Big Hits Labels</h4>

            <VideoRow 
            image={Image1}
            title="BTS: Dynamite"
            channel="Big Hit Labels"
            verified
            views="442M"
            timestamp="1 month"
            description="Musical guest BTS performs 'Dynamite' to cap off their weeklong special on 
            The Tonight Show Starring Jimmy Fallon."
            />

            <VideoRow 
            image={Image2}
            title="BTS (방탄소년단) '작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)' Official MV"
            channel="Big Hit Labels"
            verified
            views="971M"
            timestamp="1 year"
            description="BTS (방탄소년단) '작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)' Official MV"
            />

            <VideoRow 
            image={Image3}
            title="BTS (방탄소년단) - Go Go (고민보다 Go) Lyrics [Color Coded Lyrics](Han/Rom/Eng)(Official Audio)"
            channel="Big Hit Labels"
            verified
            views="95M"
            timestamp="2 years"
            description="BTS (방탄소년단) - Go Go (고민보다 Go) Lyrics (Switching Vocals) "
            />

            <VideoRow 
            image={Image4}
            title="BTS (방탄소년단) 'IDOL' Official MV"
            channel="Big Hit Labels"
            verified
            views="758M"
            timestamp="2 years"
            description="BTS (방탄소년단) 'IDOL' Official MV"
            />

            <VideoRow 
            image={Image5}
            title="BTS (방탄소년단) 'ON' Official MV"
            channel="Big Hit Labels"
            verified
            views="266M"
            timestamp="7 months ago"
            description="BTS (방탄소년단) 'ON' Kinetic Manifesto Film : Come Prima"
            />
            <hr/>

        </div>
    )
}

export default SearchPage
