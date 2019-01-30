import React from 'react';
import MomentumMockupDesktop from '../assets/mockup-momentum-mac-lp.png';
import FDLMockupDesktop from '../assets/mockup-fdl-lp-mac.png';
import LoanItMockupDesktop from '../assets/mockup-loanit-mac-lp.png';
import { Momentum, FirstDirectLending, NA } from '../components/LandingPageExamples';


let emailProjects =  [
    {'h1': 'Landing Pages', 'p': 'Momentum Loan', 'desktopmockup': MomentumMockupDesktop,},
    {'h1': 'Landing Pages', 'p': 'First Direct Lending', 'desktopmockup': FDLMockupDesktop,},
    {'h1': 'Landing Pages', 'p': 'North American Mortgage Company', 'desktopmockup': LoanItMockupDesktop,}
]

class LandingPages extends React.Component {
    state = {
        currentProject: 1
    }

    // Changes project using circle tabs
    changeProject = (event) => {
        let clickedTab = event.target;
        let getTabs = document.querySelectorAll('.tab-circle');
        for (var i = 0; i < getTabs.length; i++) {
            getTabs[i].classList.remove('active');
        }
        clickedTab.classList.add('active');
        this.setState({currentProject: clickedTab.id})
    }

    // Get image src for modal
    handleClick = (e) => {
        const imgSrc = e.target.src;
        this.props.onClick(imgSrc);
    }

    render() {
        const setProject = this.state.currentProject - 1;
        let landingPages = [<Momentum />, <FirstDirectLending />, <NA />]
        return (
            <div className="view" id="view-landingpage">
                <div className="view-description">
                <h1>Modern Landing Pages</h1>
                <p>Whether you have branding guidelines or not, our team will design personalized, customized, and responsive assets to engage leads and drive results.</p>
                {landingPages[setProject]}
                <div className="tab-row">
                    <div id="1" className="tab-circle active" onClick={this.changeProject.bind(this)}></div>
                    <div id="2" className="tab-circle" onClick={this.changeProject}></div>
                    <div id="3" className="tab-circle" onClick={this.changeProject}></div>
                </div>
                </div>
                <div className="view-mockups">
                    <img src={emailProjects[setProject].desktopmockup} onClick={this.handleClick} className="mockup-desktop" alt="email-template" />
                    {/* <img src={emailProjects[setProject].mobilemockup} onClick={this.handleClick} className="mockup-mobile" alt="email-template" /> */}
                </div>
            </div>
        )
    }
}

export default LandingPages;