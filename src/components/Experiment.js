import React from 'react';
import map from '../assets/hsbc-map.png';

class Experiment extends React.Component {

    // Get image src for modal
    handleClick = (e) => {
        const imgSrc = e.target.src;
        this.props.onClick(imgSrc);
    }

    render() {
        return (
            <div className="view" id="view-experiment">
                <div className="view-mockups">
                    <img className="mockup-experiment" onClick={this.handleClick} src={map} alt="experiment" />
                </div>
                <div className="view-description">
                    <h1>We Are Always Experimenting</h1>
                    <p>You can call it magic, but in reality there is no magic wand that can resolve our problems. The solution rests with our team of Creative Wizards’s hard work and discipline. They have developed a 3-step approach to systematically produce great design every single time.</p>
                    <ul>
                        <li>HSBC Maps</li>
                        <li>Automating Processes</li>
                        <li>OBRates: Live Rates Table</li>
                    </ul>
                </div>
            </div>
        )
    }    
}

export default Experiment;
