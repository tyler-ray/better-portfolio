import React from 'react';
import comingSoon from '../Images/img/Coming soon.jpg'
import rayRentals from '../Images/img/ray-rentalsjpg.JPG'
import typingTrainer from '../Images/img/Typing trainer.JPG'
import search from '../Images/Search.svg'
import portfolioPic from '../Images/img/Portfolio.JPG'
import swal from 'sweetalert2';

function Portfolio() {
    let rayRentalsFunction = () => {
        console.log('rayRentalsFunction')
        swal({

            title: 'Ray Rentals -- personally developed',
            html: ('This project was intended to provide a location for people to rent out large outdoor equipment. Rays Rentals uses quite a few technologies. The technologies used were HTML, CSS, JavaScript, React.js, Node.js, Axios & Express, Sessions objects as well as Auth0.  <br/><a href="https://rayrentals.com" className = "Link">Live Site (Coming soon)</a><hr/> <a href="https://github.com/tyler-ray/New-Rental" className ="Link">Git Repo</a>'),


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
            html: `Typing trainer is a project with the intent of increasing the typing speeds of a programmer or web designer. Several code snippets in several languages are available. Typing speed and accuracy are tracked and stored, and available for viewing in the profile space. These Metrics include heavy logic. A Leaderboard of top Typists also are available for viewing in the menu tab.  Technologies used include: HTML, CSS, JavaScript, React, Redux, RoboHash, SQL (Massive) Sessions objects, and Node.  Project Partners include: Amy Knudson, Damian Antia, Jason Begay, Russel Memory <br/> <a href="https://typing-trainer.com/" >Live Site </a> <br/> <a href="https://github.com/tyler-ray/type-trainer" className ="Link">Git Repo</a>`,
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
            title: 'Coming Soon',
            text: 'Next project: Portfolio & Brit Lamour clone',
            imageUrl: comingSoon,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Comning Soon',
            animation: false,
        })
    }
    let portfolioFunction = () =>{
        swal({
            title: 'Simple Portfolio',
            html: `<a href="https://typing-trainer.com/" >Live Site </a> <br/> <a href="https://github.com/tyler-ray/type-trainer" className ="Link">Git Repo</a>`,
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

                <div className="img-wrapper" onClick={() => { pronto() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

            </div>
        </div>
    )
}
export default Portfolio