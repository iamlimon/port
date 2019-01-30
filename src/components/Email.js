import React from 'react';
import MomentumMockupDesktop from '../assets/mockup-momentum-mac.png';
import MomentumMockupMobile from '../assets/mockup-momentum-et-mobile.png';
import EratesMockupDesktop from '../assets/mockup-erates-mac.png';
import EratesMockupMobile from '../assets/mockup-erates-et-mobile.png';
import NAMockupDesktop from '../assets/mockup-na-mac.png';
import NAMockupMobile from '../assets/mockup-na-et-mobile.png';
import { Momentum, ERates, NA } from '../components/EmailTemplates';



let emailProjects =  [
    {'h1': 'Email Templates', 'p': 'Momentum Loans', 'desktopmockup': MomentumMockupDesktop,'mobilemockup': MomentumMockupMobile},
    {'h1': 'Email Templates', 'p': 'eRates Mortgage', 'desktopmockup': EratesMockupDesktop,'mobilemockup': EratesMockupMobile},
    {'h1': 'Email Templates', 'p': 'North American Mortgage Company', 'desktopmockup': NAMockupDesktop,'mobilemockup': NAMockupMobile}
]







class Email extends React.Component {
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
        let emailTemplates = [<Momentum />, <ERates />, <NA />]
        return (
            <div className="view" id="view-email">
                <div className="view-mockups">
                    <img src={emailProjects[setProject].desktopmockup} onClick={this.handleClick} className="mockup-desktop" alt="email-template" />
                    {/* <img src={emailProjects[setProject].mobilemockup} onClick={this.handleClick}  className="mockup-mobile" alt="email-template" /> */}
                </div>
                <div className="view-description">
                <h1>Engaging Email Template</h1>
                <p>Whether you have branding guidelines or not, our team will design personalized, customized, and responsive assets to engage leads and drive results.</p>
                {emailTemplates[setProject]}
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

export default Email;