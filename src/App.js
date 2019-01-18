import React, { Component } from 'react';
import './css/App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Email } from './components/Email';
import { Experiment } from './components/Experiment';
import { LandingPages } from './components/LandingPages';
import { Animation } from './components/Animation';
import Modal from './components/Modal';
import ReactPageScroller from "react-page-scroller";


class App extends Component {
  state = {
    currentPage: 1,
    modalPic: ' ',
    modalVisibility: 'hide'
  }

  goToPage = (e) => {
    this.reactPageScroller.goToPage(e.currentTarget.id);
  };

  pageOnChange = (number) => {
    var num = parseInt(number);
    this.setState({currentPage: num});
  };


  onClickModal = pic => { this.setState({ modalPic: pic, modalVisibility: 'show' }) }

  exitModal = () => { this.setState({ modalVisibility: 'hide'}); }

  render() {
    return (
      <div className="App-wrapper">
          <div className="navigation">
            <Nav onClick={this.goToPage} exitModal={this.exitModal}/>
          </div>
          <div className="page-content">
            <ReactPageScroller containerWidth="100%" containerHeight="100vh" ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <About />
              <Email onClick={this.onClickModal}/>
              <LandingPages onClick={this.onClickModal} />
              <Experiment onClick={this.onClickModal} />
              <Animation />
            </ReactPageScroller>
            <p className="scroll-down">&#x2190;&nbsp;&nbsp;Scroll Down</p>
            <Modal exitModal={this.exitModal} visibility={this.state.modalVisibility} modalPic={this.state.modalPic} />
          </div>
       </div>
    );
  }
}

export default App;
