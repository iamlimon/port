import React from 'react';
import ReactBodymovin from 'react-bodymovin/lib/ReactBodymovinFull'
import animationData from '../data.json'

const Animation = () => {

    // Config for Bodymoving Animation
    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animationData
      }
    
    return (
        <div className="view" id="view-animation">
            <div className="view-mockups">
                <div className="animation-project">
                    <ReactBodymovin options={bodymovinOptions} />
                </div>
            </div>
            <div className="view-description">
            <h1>We do video</h1>
            <ul>
                <li><a href="https://softvu.wistia.com/medias/xph23ipb9c" rel="noopener noreferrer" target="_blank">Truhome Animation</a></li>
                <li><a href="https://softvu.wistia.com/medias/w31b1w83y9" rel="noopener noreferrer" target="_blank">HomeDirect</a></li>
                <li><a href="https://softvu.wistia.com/medias/3qy858xouz" rel="noopener noreferrer" target="_blank">Christmas eCard</a></li>
                <li><a href="https://softvu.wistia.com/medias/5zof88inqm" rel="noopener noreferrer" target="_blank">Mortgage Representative Video</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Animation;