import React from 'react';
import FadeIn from 'react-fade-in';
import map from '../assets/hsbc-map.png';

export const Experiment = () => {
    return (
        <FadeIn delay="100" transitionDuration="500">
        <div className="view-email">
            <div className="email-project">
                <img className="expirement-mockup" src={map} alt="email-template" />
            </div>
            <div className="email-description">
            <h1>We like to experiment</h1>
            <p>
                Interactive Maps<br/>
                Loan Officer Catalog<br/>
                Infographic<br/>
                Mortgage Calculator
            </p>
            </div>
        </div>
        </FadeIn>
    )
}
