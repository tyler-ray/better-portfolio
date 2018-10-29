import React from 'react';
import ToLearn from '../components/ToLearn'
//Skills Images

import HTML from '../Images/SVGs/icons8-html-5 (2).svg'
import CSS from '../Images/SVGs/icons8-css3.svg'
import Javascript from '../Images/SVGs/icons8-javascript-filled.svg'
import Git from '../Images/SVGs/icons8-git (1).svg'
import Jest from '../Images/SVGs/JEST.png'
import Node from '../Images/SVGs/icons8-nodejs.svg'
import ReactImg from '../Images/SVGs/icons8-react-native-filled.svg'
// import Photoshop from '../Images/SVGs/icons8-adobe-photoshop.svg'
import Photoshop from '../Images/SVGs/icons8-adobe-photoshop (1).svg'
import SASS from '../Images/SVGs/SASS.png'
import Postgresql from '../Images/SVGs/icons8-postgresql.svg'
import Badge from '../Images/img/DevMountain_Web_Badge.png'



// import CSS from '../Images/CSS.png'
// import Git from '../Images/Git.png'
// import HTML from '../Images/HTML.png'
// import Javascript from '../Images/javascript.png'
// import Jest from '../Images/jest.png'
// import Node from '../Images/node.png'
// import Photoshop from '../Images/photoshop.png'
// import ReactImg from '../Images/react.png'
// import SASS from '../Images/SASS.png'
// import Postgresql from '../Images/postgresql.png'
function Skills() {
    return (
        <div className='Skills'>
            <h1 className='title skillsTitle'>Skills</h1>
            <div className="skills-wrapper">
                <div className="second-skills-wrapper">
                    <div className="skill-set">
                        <a href="https://en.wikipedia.org/wiki/HTML">
                            <img src={HTML} alt="HTML icon" className='HTML Skill' />
                            <h3 className='skill-title'>HTML</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheetshttps://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                            <img src={CSS} alt="CSS icon" className='CSS Skill' />
                            <h3 className='skill-title'>CSS</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://en.wikipedia.org/wiki/JavaScript">
                            <img src={Javascript} alt="Javascript icon" className='Javascript Skill' />
                            <h3 className='skill-title'>Javascript</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://reactjs.org/">
                            <img src={ReactImg} alt="React icon" className='React Skill' />
                            <h3 className='skill-title'>React</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://nodejs.org/en/">
                            <img src={Node} alt="Node icon" className='Node Skill' />
                            <h3 className='skill-title'>Node.js</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://sass-lang.com/">
                            <img src={SASS} alt="SASS icon" className='SASS Skill' />
                            <h3 className='skill-title'>SASS/SCSS</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://github.com/tyler-ray">
                            <img src={Git} alt="Git icon" className='Git Skill' />
                            <h3 className='skill-title'>Git</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop">
                            <img src={Photoshop} alt="Photoshop icon" className='Photoshop Skill' />
                            <h3 className='skill-title'>Photoshop</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://jestjs.io/">
                            <img src={Jest} alt="Jest icon" className='Jest Skill' />
                            <h3 className='skill-title'>Jest</h3>
                        </a>
                    </div>
                    <div className="skill-set">
                        <a href="https://www.postgresql.org/">
                            <img src={Postgresql} alt="Postgresql icon" className='Postgresql Skill' />
                            <h3 className='skill-title'>PostgreSQL</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className="badge-wrapper">
                <a href="https://www.youracclaim.com/badges/66970c7f-b696-466c-92cb-1056cb641769/public_url">
                    <img src={Badge} alt="Badge" />
                    <p>DevMountain Issued Badge for endorsement</p>
                </a>
            </div>
            <ToLearn />
        </div>
    )
}

export default Skills