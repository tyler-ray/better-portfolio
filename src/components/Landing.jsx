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
                    <h4 className='svgLink'><a href="https://en.wikipedia.org/wiki/Front-end_web_development">Front End</a></h4>
                    <h4 className='svgLink'><a href="https://www.upwork.com/hiring/development/back-end-web-developer/">Back End</a></h4>
                    <h4 className='svgLink'><a href="https://codeup.com/what-is-a-full-stack-developer/">Full Stack</a> </h4>
                    <h4 className='svgLink'><a href="https://medium.com/server-side-swift-and-more/api-endpoint-testing-with-postman-63f907217f15">Endpoint Testing</a> </h4>
                </div>
                <Links />
            </div>
        )
    }
}
export default Landing