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
                Jeff Bezos likes to say, “Our success at Amazon is a function of how many experiments we do per year, per month, per week, per day…”
                Jeff Holden, who has built experimental engines at Amazon, Groupon, and Uber, agrees: “The philosophy is you have to build your company to be a big experimental engine and it has to start right at the beginning.”
            </p>
            </div>
        </div>
        </FadeIn>
    )
}
