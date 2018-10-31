import React from 'react';
import mockup from '../assets/landing-page-mockups.png';
import FadeIn from 'react-fade-in';

export const LandingPages = () => {
    return (
        <FadeIn delay="100" transitionDuration="500">
        <div className="view-email">
            <div className="email-project">
                <img className="email-mockup" src={mockup} alt="email-template" />
            </div>
            <div className="email-description">
            <h1>We do landing pages</h1>
            <p>You can call it magic, but in reality there is no magic wand that can resolve our problems. The solution rests with our team of Creative Wizards’s hard work and discipline. They have developed a 3-step approach to systematically produce great design every single time.</p>
            </div>
        </div>
        </FadeIn>
    )
}
