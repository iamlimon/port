import React, { Component } from 'react';
import './scss/App.scss';
import Nav from './components/Nav';
import About from './components/About';
import Email from './components/Email';
import Experiment from './components/Experiment';
import LandingPages from './components/LandingPages';
import Animation from './components/Animation';
import Contact from './components/Contact';
import Modal from './components/Modal';


class App extends Component {
  state = {
    currentPage: 1,
    modalPic: ' ',
    modalVisibility: 'hide'
  }

  // Open modal of click portfolio image
  onClickModal = pic => { this.setState({ modalPic: pic, modalVisibility: 'show' }) }


  // Exits modal on click of X
  exitModal = () => { console.log('clicked'); this.setState({ modalVisibility: 'hide'}); }

  render() {
    return (
      <div className="App-wrapper">
          <Nav currentPage={this.state.currentPage} onClick={this.goToPage} exitModal={this.exitModal}/>
          <div className="page-content">
            <About />
            <Email onClick={this.onClickModal}/>
            <LandingPages onClick={this.onClickModal} />
            <Experiment onClick={this.onClickModal} />
            <Animation />
            <Contact />
            {this.state.currentPage === 5 ? null : <p className="scroll-down">&#x2193;&nbsp;&nbsp;Scroll Down&nbsp;&nbsp;&#x2193;</p>  }
            <Modal exitModal={this.exitModal} visibility={this.state.modalVisibility} modalPic={this.state.modalPic} />
          </div>
       </div>
    );
  }
}

export default App;
