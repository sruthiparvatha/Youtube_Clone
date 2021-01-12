import React from 'react';
import VideoImage1 from './images/video1.png';
import VideoImage2 from './images/video2.png';
import VideoImage3 from './images/video3.png';
import VideoImage4 from './images/video4.png';
import VideoImage5 from './images/video5.png';
import VideoImage6 from './images/video6.png';
import VideoImage7 from './images/video7.png';
import SubsImage1 from './images/sub1.jpg';
import SubsImage2 from './images/sub2.jpg';
import SubsImage3 from './images/sub3.jpg';
import SubsImage4 from './images/sub4.jpg';

import Image1 from './images/vr1.jpg';
import Image2 from './images/vr2.jpg';
import Image3 from './images/vr3.jpg';
import Image4 from './images/vr4.jpg';
import Image5 from './images/vr5.jpg';

import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
           <h2>Recommended</h2>
           <div className="recommendedVideos__videos">

               <VideoCard 
                title="TOP 10 PIANO COVERS on YOUTUBE #1"
                channel="Solís Music"
                image={VideoImage1}
                // image="data:image/jpeg;base64,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"
                views="11M "
                timestamp="Sep 25, 2017"
                channelImage={SubsImage1}
               />

               <VideoCard 
                title="BTS: Dynamite"
                channel="Big Hit Labels"
                image={VideoImage2}
                views="439M "
                timestamp="1 month ago"
                channelImage={SubsImage2}
               />

               <VideoCard 
                title="BTS: Black Swan"
                channel="Big Hit Labels"
                image={VideoImage3}
                views="176M"
                timestamp="7 months ago"
                channelImage={SubsImage2}
               />

               <VideoCard 
                title="BTS: Boy With Luv"
                channel="Big Hit Labels"
                image={VideoImage4}
                views="968M"
                timestamp="1 year ago"
                channelImage={SubsImage2}
               />

               <VideoCard 
                title="Taylor Swift - Bad Blood"
                channel="Taylor Swift"
                image={VideoImage5}
                views="1.3B"
                timestamp="5 years ago"
                channelImage={SubsImage3}
               />

                <VideoCard 
                title="Taylor Swift - Blank Space"
                channel="Taylor Swift"
                image={VideoImage6}
                views="2.6B"
                timestamp="5 years ago"
                channelImage={SubsImage3}

               />       
               <VideoCard 
                title="Rihanna - Diamonds" 
                channel="Rihanna"
                image={VideoImage7}
                views="1.5B"
                timestamp="7 years ago"
                channelImage={SubsImage4}
               />


                <VideoCard 
                title="BTS (방탄소년단) - Go Go  Lyrics(Official Audio)"
                channel="Big Hit Labels"
                image={Image3}
                // image="data:image/jpeg;base64,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"
                views="95M "
                timestamp="2 years"
                channelImage={SubsImage2}
               />
               
               <VideoCard 
                title="BTS (방탄소년단) 'IDOL' Official MV"
                channel="Big Hit Labels"
                image={Image4}
                views="758M "
                timestamp="2 years"
                channelImage={SubsImage2}
               /> 

               <VideoCard 
                title="BTS (방탄소년단) 'ON' Official MV" 
                channel="Big Hit Labels"
                image={Image5}
                views="266M"
                timestamp="7 months ago"
                channelImage={SubsImage4}
               />

           </div>
        </div>
    )
}

export default RecommendedVideos
