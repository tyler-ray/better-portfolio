import React, { Component } from 'react';
import Links from './Links';
import headshot from '../Images/selfie3.png'
class Landing extends Component {
    render() {
        return (
            <div className='Landing'>
                <img className='headshot' src={headshot} alt="Tyler Headshot" />
                <h1 id='name'>J. Tyler Ray</h1>
                <div className="sub-wrapper">
                    <h4>Front End</h4>
                    <h4>Back End</h4>
                    <h4>Full Stack</h4>
                    <h4>Endpoint Testing</h4>
                </div>
                <Links />
            </div>
        )
    }
}
export default Landing