import React, { Component } from 'react';
import logo from '../assets/svg/logo-softvu.svg';
import iconCode from '../assets/svg/icon-code.svg';
import iconComputer from '../assets/svg/icon-computer.svg';
import iconLightbulb from '../assets/svg/icon-lightbulb.svg';
import iconPhone from '../assets/svg/icon-phone.svg';

export class Nav extends Component {
    render() {
      return (
        <nav id="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="nav-icon-container">
                <img onClick={this.props.onClick} src={ iconCode } alt="Coding Projects" id="email" className="nav-icon"/>
                <img onClick={this.props.onClick} src={ iconComputer } alt="Coding Projects" id="landingpages" className="nav-icon"/>
                <img onClick={this.props.onClick} src={ iconLightbulb } alt="Coding Projects" id="experiment" className="nav-icon"/>
                <img onClick={this.props.onClick} src={ iconPhone } alt="Coding Projects" id="about" className="nav-icon"/>
            </div>
        </nav>
      );
    }
  }
  

  
