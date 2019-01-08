import React from 'react';
import MomentumMockupDesktop from '../assets/mockup-momentum-et-deskop.png';
import MomentumMockupMobile from '../assets/mockup-momentum-et-mobile.png';
import EratesMockupDesktop from '../assets/mockup-erates-et-desktop.png';
import EratesMockupMobile from '../assets/mockup-erates-et-mobile.png';
import NAMockupDesktop from '../assets/mockup-na-et-desktop.png';
import NAMockupMobile from '../assets/mockup-na-et-mobile.png';


let emailProjects =  [
    {'h1': 'Momentum Email Templates', 'p': 'This is the momentum creative work.', 'desktopmockup': MomentumMockupDesktop,'mobilemockup': MomentumMockupMobile},
    {'h1': 'eRates Email Templates', 'p': 'This is the eRates creative work.', 'desktopmockup': EratesMockupDesktop,'mobilemockup': EratesMockupMobile},
    {'h1': 'North American Mortgage Company', 'p': 'This is the North American creative work.', 'desktopmockup': NAMockupDesktop,'mobilemockup': NAMockupMobile}
]

export class Email extends React.Component {
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
