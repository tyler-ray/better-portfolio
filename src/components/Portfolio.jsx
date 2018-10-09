import React from 'react';
import comingSoon from '../Images/img/Coming soon.jpg'
import rayRentals from '../Images/img/ray-rentalsjpg.JPG'
import typingTrainer from '../Images/img/Typing trainer.JPG'
import search from '../Images/Search.svg'

function Portfolio() {
    return (
        <div className='Portfolio'>
            <h1 className='title'>Portfolio</h1>
            <div className="portfolio-wrapper">

                <div className="img-wrapper">
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={rayRentals} alt="Ray Rentals Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper">
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={typingTrainer} alt="Typing Trainer Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper">
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper">
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper">
                    <div className="expandsvg">
                        <img src={search} alt="zoom" className='search' />
                    </div>
                    <img src={comingSoon} alt="Coming soon Thumbnail" className='thumbnail' />
                </div>

                <div className="img-wrapper">
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