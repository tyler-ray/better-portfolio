import React from 'react';
import Gallery from './Gallery'

function About() {
    return (
        <div className="About">
            <h1 className="title">About Tyler</h1>
            <div className="about-wrapper">
                <div className="left-about about">
                    <p className='aboutMe'>
                        It all started in 10th grade math class Algebra II when a teenager discovered that his TI-83 could be programmed to do his homework for him. That started a landslide of love for computing and programming. I discovered that I not only learned the material better when I created simple math programs on my calculator, but also that I really enjoyed programming it! I would go the extra mile just to make each program I made more versatile and even adding in visual elements to make it look better on my calculator. I've been augmenting my computer skills since.
                    </p>
                </div>
                <div className="right-about about">
                    <p className='aboutMe'>
                        Besides computing, I have a passion for Martial Arts, Ballroom Dance, and Theatre. I earned my Eagle Scout award at the age of 14, and served two years in Mexico, Saltillo for the Church of Jesus Christ of Latter Day Saints at the age of 19. I moved to Hawaii for a semester to study in BYU Hawaii's business program. I moved to Utah to follow my passion for computer programming. I studied at the Web Design Bootcamp DevMountain to sharpen my skills. It was a phenominal experience which allowed me to gain the skills I need to comfortably design and build websites from scratch.
                    </p>
                </div>
            </div>
            <Gallery />
        </div>
    )
}

export default About