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
                    <h1>We like to experiment</h1>
                    <p>Interactive Maps</p>
                </div>
            </div>
        )
    }    
}

export default Experiment;
