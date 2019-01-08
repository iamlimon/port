import React, { Component } from 'react';
import './css/App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Email } from './components/Email';
import { Experiment } from './components/Experiment';
import { LandingPages } from './components/LandingPages';
import { Animation } from './components/Animation';
import ReactPageScroller from "react-page-scroller";


class App extends Component {
  state = {
    currentPage: 1
  }

  goToPage = (e) => {
    this.reactPageScroller.goToPage(e.currentTarget.id);
  };

  pageOnChange = (number) => {
    var num = parseInt(number);
    this.setState({currentPage: num});
  };

  render() {
    return (
      <div className="App-wrapper">
          <div className="navigation">
            <Nav onClick={this.goToPage} />
          </div>
          <div className="page-content">
            <ReactPageScroller containerWidth="100%" containerHeight="100vh" ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <About />
              <Email />
              <LandingPages />
              <Experiment />
              <Animation />
            </ReactPageScroller>
            <p className="scroll-down">&#x2190;&nbsp;&nbsp;Scroll Down</p>
          </div>
       </div>
    );
  }
}

export default App;
