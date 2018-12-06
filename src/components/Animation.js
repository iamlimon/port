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
        <div id="view" className="view-email">
            <div className="view-project">
                <div className="animation-project">
                    <ReactBodymovin options={bodymovinOptions} />
                </div>
            </div>
            <div className="view-description">
            <h1>We do animation</h1>
            <p>You can call it magic, but in reality there is no magic wand that can resolve our problems. The solution rests with our team of Creative Wizards’s hard work and discipline. They have developed a 3-step approach to systematically produce great design every single time.</p>
            </div>
        </div>
    )
}
