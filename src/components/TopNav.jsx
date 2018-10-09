import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <div className="TopNav">
                <div className="logo-wrapper">
                    <h1 className='logo'>J. Tyler Ray</h1>
                </div>
                <div className="nav">
                    {/* <h4>Home</h4> */}
                    <h3>Skills</h3>
                    <h3>Portfolio</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            </div>
        )
    }
} export default TopNav