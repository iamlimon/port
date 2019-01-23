import React, { Component } from 'react';
import './css/App.css';
import Nav from './components/Nav';
import About from './components/About';
import Email from './components/Email';
import Experiment from './components/Experiment';
import LandingPages from './components/LandingPages';
import Animation from './components/Animation';
import Modal from './components/Modal';
import ReactPageScroller from "react-page-scroller";


class App extends Component {
  state = {
    currentPage: 1,
    modalPic: ' ',
    modalVisibility: 'hide'
  }

  // Recieves number and changes to that page
  goToPage = (e) => {
    var newPage = parseInt(e.currentTarget.id);
    this.reactPageScroller.goToPage(newPage);
  };

  // If the pages does changes, update the state of Current Page
  pageOnChange = (number) => {
    var newPage = parseInt(number);
    this.setState({currentPage: newPage});
  };

  // Open modal of click portfolio image
  onClickModal = pic => { this.setState({ modalPic: pic, modalVisibility: 'show' }) }


  // Exits modal on click of X
  exitModal = () => { this.setState({ modalVisibility: 'hide'}); }

  render() {
    return (
      <div className="App-wrapper">
          <div className="navigation">
            <Nav currentPage={this.state.currentPage} onClick={this.goToPage} exitModal={this.exitModal}/>
          </div>
          <div className="page-content">
            <ReactPageScroller containerWidth="100%" containerHeight="100vh" ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <About />
              <Email onClick={this.onClickModal}/>
              <LandingPages onClick={this.onClickModal} />
              <Experiment onClick={this.onClickModal} />
              <Animation />
            </ReactPageScroller>
            {this.state.currentPage === 5 ? null : <p className="scroll-down">&#x2193;&nbsp;&nbsp;Scroll Down&nbsp;&nbsp;&#x2193;</p>  }
            <Modal exitModal={this.exitModal} visibility={this.state.modalVisibility} modalPic={this.state.modalPic} />
          </div>
       </div>
    );
  }
}

export default App;
