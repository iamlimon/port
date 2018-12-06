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
    view: 'about',
    currentPage: 0
  }
  
  handleClick = (e) => {
    const id = e.target.id;
    this.setState({
      view: id
    })
  }

  goToPage = (e) => {
    console.log('clicked');
    const page = e.target.id;
    this.reactPageScroller.goToPage(page);
  }

  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };

  render() {
    console.log('Current View: ' + this.state.view);
    console.log('Current Page: ' + this.state.currentPage);
    let currentView = this.state.view;
    if ( currentView  === 'about' ) {
      currentView  = <About />;
    } else if (currentView  === 'email') {
      currentView  = <Email />;
    }
    else if (currentView  === 'experiment') {
      currentView  = <Experiment />;
    }
    else if (currentView  === 'landingpages') {
      currentView  = <LandingPages  />;
    }
    else {
      currentView  = <Animation  />;
    }

    return (
      <div className="App-wrapper">
          <Nav onClick={this.goToPage} />
          <div className="page-content">
            <ReactPageScroller animationTimer={900} ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <About />
              <Email />
              <LandingPages />
              <Experiment />
              <Animation />
            </ReactPageScroller>
          </div>
       </div>
    );
  }
}

export default App;
