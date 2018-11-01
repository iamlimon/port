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
    view: 'about'
  }
  
  handleClick = (e) => {
    const id = e.target.id;
    this.setState({
      view: id
    })
  }

  render() {
    console.log(this.state);
    let view = this.state.view;
    if ( view === 'about' ) {
      view = <About />;
    } else if (view === 'email') {
      view = <Email />;
    }
    else if (view === 'experiment') {
      view = <Experiment />;
    }
    else if (view === 'landingpages') {
      view = <LandingPages  />;
    }
    else {
      view = <Animation  />;
    }


    return (
      <div className="App">
        <header className="App-header">
          <Nav onClick={this.handleClick} />
          { view }
        </header>
       </div>
    );
  }
}

export default App;
