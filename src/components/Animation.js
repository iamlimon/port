import React from 'react';
import ReactBodymovin from 'react-bodymovin/lib/ReactBodymovinFull'
import animationData from '../data.json'

export const Animation = () => {

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
            <p>View some of our videos</p>
            <ul>
                <li><a href="https://softvu.wistia.com/medias/xph23ipb9c" target="_Blank">Truhome Animaion</a></li>
                <li><a href="https://softvu.wistia.com/medias/w31b1w83y9" target="_blank">HomeDirect</a></li>
                <li><a href="https://softvu.wistia.com/medias/3qy858xouz" target="_blank">Christmas eCard</a></li>
                <li><a href="https://softvu.wistia.com/medias/5zof88inqm" target="_blank">Talking head video</a></li>
            </ul>
            </div>
        </div>
    )
}
