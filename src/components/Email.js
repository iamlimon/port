import React from 'react';
import mockup from '../assets/email-mockups.png';

export const Email = () => {
    return (
        <div id="view" className="view-email">
            <div className="view-project">
                <img className="email-mockup" src={mockup} alt="email-template" />
            </div>
            <div className="view-description">
            <h1>We do email</h1>
            <p>You can call it magic, but in reality there is no magic wand that can resolve our problems. The solution rests with our team of Creative Wizards’s hard work and discipline. They have developed a 3-step approach to systematically produce great design every single time.</p>
            </div>
        </div>
    )
}
