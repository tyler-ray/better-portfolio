import React from 'react';
import myResume from '../Images/updated Resume.jpg'
function Resume() {

    
    function expand() {
        
        const resumePage = document.querySelector('.resume-wrapper')
        const gradient = document.querySelector('.gradient')

        gradient.classList.toggle('hidden')
        resumePage.classList.toggle('auto')





    }
    return (
        <div className="Resume">
            <h1 className="title">Resume</h1>
            <div className="resume-wrapper" onClick = {expand}>
                <div className="gradient" ></div>
                <img src={myResume} className='resumeImg' alt="My Resume" />
                <p className = 'click2expand'>Click to expand</p>
            </div>
        </div>
    )
}

export default Resume
