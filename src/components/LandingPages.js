import React from 'react';
import MomentumMockupDesktop from '../assets/mockup-momentum-lp-desktop.png';
import MomentumMockupMobile from '../assets/mockup-momentum-lp-mobile.png';
import FDLMockupDesktop from '../assets/mockup-fdl-lp-desktop.png';
import FDLMockupMobile from '../assets/mockup-fdl-lp-mobile.png';
import LoanItMockupDesktop from '../assets/mockup-loanit-lp-desktop.png';
import LoanItMockupMobile from '../assets/mockup-loanit-lp-mobile.png';


let emailProjects =  [
    {'h1': 'Landing Pages', 'p': 'Momentum Loan', 'desktopmockup': MomentumMockupDesktop,'mobilemockup': MomentumMockupMobile},
    {'h1': 'Landing Pages', 'p': 'First Direct Lending', 'desktopmockup': FDLMockupDesktop,'mobilemockup': FDLMockupMobile},
    {'h1': 'Landing Pages', 'p': 'North American Mortgage Company', 'desktopmockup': LoanItMockupDesktop,'mobilemockup': LoanItMockupMobile}
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
        return (
            <div className="view" id="view-landingpage">
                <div className="view-mockups">
                    <img src={emailProjects[setProject].desktopmockup} onClick={this.handleClick} className="mockup-desktop" alt="email-template" />
                    <img src={emailProjects[setProject].mobilemockup} onClick={this.handleClick} className="mockup-mobile" alt="email-template" />
                </div>
                <div className="view-description">
                <h1>{emailProjects[setProject].h1}</h1>
                <p>{emailProjects[setProject].p}</p>
                <div className="tab-row">
                    <div id="1" className="tab-circle active" onClick={this.changeProject.bind(this)}></div>
                    <div id="2" className="tab-circle" onClick={this.changeProject}></div>
                    <div id="3" className="tab-circle" onClick={this.changeProject}></div>
                </div>
                </div>
            </div>
        )
    }
}

export default LandingPages;