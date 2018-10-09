import React from 'react';
import CSS from '../Images/CSS.png'
import Git from '../Images/Git.png'
import HTML from '../Images/HTML.png'
import Javascript from '../Images/javascript.png'
import Jest from '../Images/jest.png'
import Node from '../Images/node.png'
import Photoshop from '../Images/photoshop.png'
import ReactImg from '../Images/react.png'
import SASS from '../Images/SASS.png'
import Postgresql from '../Images/postgresql.png'
function Skills() {
    return (
        <div className='Skills'>
            <h1 className='title'>Skills</h1>
            <div className="skills-wrapper">
                <div className="second-skills-wrapper">
                    <div className="skill-set">
                        <img src={HTML} alt="HTML icon" className='HTML Skill' />
                        <h3>HTML</h3>
                    </div>
                    <div className="skill-set">
                        <img src={CSS} alt="CSS icon" className='CSS Skill' />
                        <h3>CSS</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Javascript} alt="Javascript icon" className='Javascript Skill' />
                        <h3>Javascript</h3>
                    </div>
                    <div className="skill-set">
                        <img src={ReactImg} alt="React icon" className='React Skill' />
                        <h3>React</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Node} alt="Node icon" className='Node Skill' />
                        <h3>Node.js</h3>
                    </div>
                    <div className="skill-set">
                        <img src={SASS} alt="SASS icon" className='SASS Skill' />
                        <h3>SASS/SCSS</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Git} alt="Git icon" className='Git Skill' />
                        <h3>Git</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Photoshop} alt="Photoshop icon" className='Photoshop Skill' />
                        <h3>Photoshop</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Jest} alt="Jest icon" className='Jest Skill' />
                        <h3>Jest</h3>
                    </div>
                    <div className="skill-set">
                        <img src={Postgresql} alt="Postgresql icon" className='Postgresql Skill' />
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills