import React, { Component } from 'react';
import './css/App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Email } from './components/Email';
import { Experiment } from './components/Experiment';
import { LandingPages } from './components/LandingPages';
import { Animation } from './components/Animation';


class App extends Component {
  state = {
    view: 'about',
    scrollAmount: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  
  }
  handleClick = (e) => {
    const id = e.target.id;
    this.setState({
      view: id
    })
  }


  handleScroll = (e) => {
    let newScrollAmount = this.state.scrollAmount + 1;
    this.setState({ scrollAmount: newScrollAmount  })
     //If I scroll 50px go to the next item in the array
    if (newScrollAmount >= 10) {
      if (this.state.view === 'about') {
        this.setState({ view: 'email', scrollAmount: 0})
      }
      else if (this.state.view === 'email') {
        this.setState({ view: 'landingpages', scrollAmount: 0})
      }
      else if (this.state.view === 'landingpages') {
        this.setState({ view: 'animation', scrollAmount: 0})
      }
      else {
        this.setState({ view: 'about', scrollAmount: 0})
      }
    }
    console.log(this.state.scrollAmount);
  }

  render() {
    console.log('Current View: ' + this.state.view);
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
      <div className="App">
        <header className="App-header">
          <Nav onClick={this.handleClick} />
          { currentView  }
        </header>
       </div>
    );
  }
}

export default App;
