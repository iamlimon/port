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

//   handleScroll = (e) => {
//     const views = ['about','email','expirement','landingpage']; 
//     console.log(e.target.body.scrollTop);
//     console.log(window.pageYOffset);
//     if(window.pageYOffset > 80) {
//       console.log('80')
//       var newState = "email";
//       this.setState({
//         view: newState
//       })
//     }
//     console.log('logging scroll')
//     if (e.target.body.scrollTop < 1) {            
//         this.setState({
//           view: views[i]
//         })
//     } 
//     else {
//       console.log('Less than 100')
//     }
// }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
    console.log('Scroll event removed to window')
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
