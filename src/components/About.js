import React from 'react';
import arrowIcon from '../assets/svg/icon-arrow.svg';
import FadeIn from 'react-fade-in';


export const About = () => {
    return (
        <FadeIn delay="100" transitionDuration="500">
        <div className="view-about">
            <h1>WE ARE SOFTVU<br/> AND WE ARE PRETTY AWESOME!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src={arrowIcon} className="arrow-icon" alt="logo" />
        </div>
        </FadeIn>
    )
}
