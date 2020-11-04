import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className = 'storyReel'>
            <Story 
                image = "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc = "https://media.gettyimages.com/photos/season-1-pictured-picture-id1061959920?s=2048x2048"
                title = "The Rock"
            />
            <Story 
                image = "https://media.gettyimages.com/photos/shah-rukh-khan-in-a-musical-tribute-performance-at-iifa-2004-awards-picture-id134755601?s=2048x2048"
                profileSrc = "https://media.gettyimages.com/photos/portrait-of-shahrukh-khan-picture-id499342275?s=2048x2048"    
                title = "Shahrukh Khan"
            />
            <Story 
                image = "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-.2.1&ixd=eyJhcHBfaWQi0jEyMDd9&w=1000&q=80"
                profileSrc = "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
                title = "Jeff Bejos"
            />
            <Story
                image = "https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019//11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileSrc = "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title = "Aaron Berneth"
            />
            <Story 
                image = "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileSrc = "https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
                title = "Naz"
            />

        </div>
    )
}

export default StoryReel
