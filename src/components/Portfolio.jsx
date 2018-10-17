import React from 'react';
import comingSoon from '../Images/img/Coming soon.jpg'
import rayRentals from '../Images/img/ray-rentalsjpg.JPG'
import typingTrainer from '../Images/img/Typing trainer.JPG'
import search from '../Images/Search.svg'
import swal from 'sweetalert2';

function Portfolio() {
    let first = () => {
        console.log('first')
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
    let second = () => {
        console.log('second')
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
    let third = () => {
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
    // let fourth = () =>{}
    // let fifth = () =>{}
    // let sixth = () =>{}
    return (
        <div className='Portfolio'>
            <h1 className='title'>Portfolio</h1>
            <div className="portfolio-wrapper">

                <div className="img-wrapper" onClick={() => first()}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={rayRentals} alt="Ray Rentals Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { second() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={typingTrainer} alt="Typing Trainer Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { third() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { third() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { third() }}>
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper" onClick={() => { third() }}>
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