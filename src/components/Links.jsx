import React from 'react';
import github from '../Images/github2.svg'
import linkedin from '../Images/linkedin.svg'
function Links() {
    return (
        <div className='Links'>
        <a href="github.com/tyler-ray">
            <img src={github} alt="github" className='svg' />
        </a>
        <a href="https://www.linkedin.com/in/j-tyler-ray/">
            <img src={linkedin} alt="linkedin" className='svg' />
        </a>
        </div>

    )
}
export default Links