import React from 'react';
import comingSoon from '../Images/img/Coming soon.jpg'
import rayRentals from '../Images/img/ray-rentalsjpg.JPG'
import typingTrainer from '../Images/img/Typing trainer.JPG'
import search from '../Images/Search.svg'
import portfolioPic from '../Images/img/Portfolio.JPG'
import swal from 'sweetalert2';
import brit from '../Images/img/Brit Lamour 1.JPG'
// import Resume from '../components/Resume'

function Portfolio() {
    let rayRentalsFunction = () => {
        console.log('rayRentalsFunction')
        swal({

            title: 'Ray Rentals -- personally developed',
            html: ('This project was intended to provide a location for people to rent out large outdoor equipment. Rays Rentals uses quite a few technologies. The technologies used were HTML, CSS, JavaScript, React.js, Node.js, Axios & Express, Sessions objects as well as Auth0.  <br/><a href="https://rentals.jtylerray.com" className = "Link">Live Site </a><hr/> <a href="https://github.com/tyler-ray/New-Rental" className ="Link">Git Repo</a>'),


            imageUrl: rayRentals,
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Rays Rentals',
            // animation: false,
            width: 1000,
        })
    }
    let TypingTrainerFunction = () => {
        console.log('TypingTrainerFunction')
        swal({
            title: 'Typing Trainer',
            html: `Typing trainer is a project with the intent of increasing the typing speeds of a programmer or web designer. Several code snippets in several languages are available. Typing speed and accuracy are tracked and stored, and available for viewing in the profile space. These Metrics include heavy logic. A Leaderboard of top Typists also are available for viewing in the menu tab.  Technologies used include: HTML, CSS, JavaScript, React, Redux, RoboHash, SQL (Massive) Sessions objects, and Node.  Project Partners include: Amy Knudson, Damian Antia, Jason Begay, Russel Memory <br/> <a href="https://typing.jtylerray.com" >Live Site </a> <br/> <a href="https://github.com/tyler-ray/type-trainer" className ="Link">Git Repo</a>`,
            imageUrl: typingTrainer,
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Typing Trainer',
            animation: false,
            width: 1000
        })
    }
    let pronto = () => {
        swal({
            title: 'Coming Soon:',
            text: 'Current project: Brit Lamour Clone, Next Project: React Libraries',
            imageUrl: comingSoon,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Comning Soon',
            animation: false,
        })
    }
    let britlamour = () =>{
        swal({
            title: 'Under Construction: Brit L\'amour clone!',
            html: "This is my current project. It is still unfinished and unpolished. But it has been a great learning experience. Currently I'm working towards cleaning up the CSS, and adding content. soon there will be a blog, photo gallery, working contact section and more. Stay tuned as I will be updating this regularly.  This project is a clone of my Cousin 'Brit's website. She is a social media marketer as well as photographer, Real Estate Agent, and Blogger.  I decided to clone her website as a challenge to myself.  The current technology stack is HTML, CSS, React, and Node.js.  soon I will add technologies such as nodemailer and more.<br/><a href='http://britlamour.com'>Live Site</a> <br/> <a href='https://github.com/tyler-ray/brit-Lamour-clone'>Git Hub Repo</a> ",
            imageUrl: brit,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Brit L\'amour website clone',
            animation: false,
        })
    }
    
    let portfolioFunction = () =>{
        swal({
            title: 'Simple Portfolio',
            html: `This is an increadibly simple site to host my project pieces and some basic information about me!<br/><a href="https://github.com/tyler-ray/better-portfolio" className ="Link">Git Repo</a>`,
            imageUrl: portfolioPic,
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Simple Portfolio',
            animation: false,
            width: 1000 
        })
    }
    // let fifth = () =>{}
    // let sixth = () =>{}
    return (
        <div className='Portfolio'>
            <h1 className='title'>Portfolio</h1>
            <div className="portfolio-wrapper">

                <div className="img-wrapper" onClick={() => rayRentalsFunction()}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={rayRentals} alt="Ray Rentals Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { TypingTrainerFunction() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={typingTrainer} alt="Typing Trainer Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { portfolioFunction() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={portfolioPic} alt="Simple Portfolio" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { britlamour() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={brit} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { pronto() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { pronto() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

            </div>
            {/* <Resume/> */}
        </div>
    )
}
export default Portfolio