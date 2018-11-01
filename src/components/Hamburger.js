import React from 'react';
import FadeIn from 'react-fade-in';


export class Hamburger extends React.Component{
    state = {
        isHidden: true
    }

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden 
        })
    }

    render() {
        return (
            <div>
            <div onClick={this.toggleHidden.bind(this)} className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {!this.state.isHidden && 
            <FadeIn delay="100" transitionDuration="500">
            <div className="menu">
                <p onClick={this.props.onClick} id="about" >About</p>
                <p onClick={this.props.onClick} id="email" >Email</p>
                <p onClick={this.props.onClick} id="landingpages" >Landing Pages</p>
                <p onClick={this.props.onClick} id="animation" >Animation</p>
            </div>
            </FadeIn>
            }
            </div>
        )
    }
}  