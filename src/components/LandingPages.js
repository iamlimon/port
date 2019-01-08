import React from 'react';
import MomentumMockupDesktop from '../assets/mockup-momentum-lp-desktop.png';
import MomentumMockupMobile from '../assets/mockup-momentum-lp-mobile.png';
import FDLMockupDesktop from '../assets/mockup-fdl-lp-desktop.png';
import FDLMockupMobile from '../assets/mockup-fdl-lp-mobile.png';
import LoanItMockupDesktop from '../assets/mockup-loanit-lp-desktop.png';
import LoanItMockupMobile from '../assets/mockup-loanit-lp-mobile.png';


let emailProjects =  [
    {'h1': 'Momentum Landing Page', 'p': 'This is the momentum creative work.', 'desktopmockup': MomentumMockupDesktop,'mobilemockup': MomentumMockupMobile},
    {'h1': 'First Direct Lending Landing Page', 'p': 'This is the eRates creative work.', 'desktopmockup': FDLMockupDesktop,'mobilemockup': FDLMockupMobile},
    {'h1': 'Loan it Landing Page', 'p': 'This is the North American creative work.', 'desktopmockup': LoanItMockupDesktop,'mobilemockup': LoanItMockupMobile}
]

export class LandingPages extends React.Component {
    state = {
        currentProject: 1
    }

    changeProject = (event) => {
        let changeProjectID = event.target.id;
        let getClickedTab = event.target;
        let getTabs = document.querySelectorAll('.tab-circle');
        for (var i = 0; i < getTabs.length; i++) {
            getTabs[i].classList.remove('active');
        }
        getClickedTab.classList.add('active');
        this.setState({currentProject: changeProjectID})
    }

    render() {
        const setProject = this.state.currentProject - 1;
        return (
            <div className="view" id="view-email">
                <div className="view-mockups">
                    <img src={emailProjects[setProject].desktopmockup} className="mockup-desktop" alt="email-template" />
                    <img src={emailProjects[setProject].mobilemockup} className="mockup-mobile" alt="email-template" />
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
