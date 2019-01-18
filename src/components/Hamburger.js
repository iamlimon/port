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
                <p onClick={this.props.onClick} id="0" >About</p>
                <p onClick={this.props.onClick} id="1" >Email</p>
                <p onClick={this.props.onClick} id="2" >Landing Pages</p>
                <p onClick={this.props.onClick} id="3" >Animation</p>
            </div>
            </FadeIn>
            }
            </div>
        )
    }
}  