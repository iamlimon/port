import React from 'react';
import arrowIcon from '../assets/svg/icon-arrow.svg';

export const About = () => {
    return (
        <div id="view" className="view-about">
            <div className="about-content">
            <h1>WE ARE SOFTVU<br/> AND WE ARE PRETTY AWESOME!</h1>
            <p>You can call it magic, but in reality there is no magic wand that can resolve our problems. The solution rests with our team of Creative Wizards’s hard work and discipline. They have developed a 3-step approach to systematically produce great design every single time.</p>
            <img src={arrowIcon} className="arrow-icon" alt="logo" />
            </div> 
        </div>
    )
}
