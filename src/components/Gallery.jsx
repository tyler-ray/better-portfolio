import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import dolphin from '../Images/img/Personal/Dolifin 1.jpg'
import scuba1 from '../Images/img/Personal/scuba 1.jpg'
import scuba2 from '../Images/img/Personal/scuba 2.jpg'
import scuba3 from '../Images/img/Personal/scuba4.jpg'
import cousins1 from '../Images/img/Personal/Cousins.jpg'
import cousins2 from '../Images/img/Personal/Cousins2.jpg'
import jessie from '../Images/img/Personal/Jessie.jpg'
import ballroom from '../Images/img/Personal/Ballroom 1.jpg'
import theatre from '../Images/img/Personal/Theatre.jpg'
import family from '../Images/img/Personal/Big Family.jpg'
import mission1 from '../Images/img/Personal/mission1.jpg'
import mission2 from '../Images/img/Personal/mission2.jpg'
import mission3 from '../Images/img/Personal/mission3.jpg'
import mission4 from '../Images/img/Personal/mission4.jpg'
import kenpo from '../Images/img/Personal/Kenpo 1.jpg'
import josh from '../Images/img/Personal/el pitufo.jpg'
import crash from '../Images/img/Personal/first crash.jpg'
import falls from '../Images/img/Personal/Niagra falls.jpg'
import family2 from '../Images/img/Personal/26196450_10214014635827492_1983484947820191274_n.jpg'
import family3 from '../Images/img//Personal/28280107_10214375774415731_8463497335754682737_n.jpg'





function Gallery() {

    return (
        <div className="Gallery">
            <h1 className ='title myGallery'>Personal Gallery:</h1>
            <Carousel className='Carousel' infiniteLoop={true} autoPlay={true} dynamicHeight={true}>

                <div className="circulateImg">
                    <img src={dolphin} className='circleImg' alt="" />
                    <p>Hanging with Dolphins!</p>
                </div>
                <div className="circulateImg">
                    <img src={scuba1} className='circleImg' alt="" />
                    <p>Swimming with the fishes</p>

                </div>
                <div className="circulateImg">
                    <img src={scuba2} className='circleImg' alt="" />
                    <p>Swimming with the fishes 1</p>
                </div>
                <div className="circulateImg">
                    <img src={scuba3} className='circleImg' alt="" />
                    <p>Swimming with the fishes 2</p>
                </div>
                <div className="circulateImg">
                    <img src={cousins1} className='circleImg' alt="" />
                    <p>Cousins</p>
                </div>
                <div className="circulateImg">
                    <img src={cousins2} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={jessie} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={ballroom} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={theatre} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={family} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={mission1} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={mission2} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={mission3} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={mission4} alt="" className="circleImg" />
                    <p></p>
                </div>

                <div className="circulateImg">
                    <img src={kenpo} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={josh} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={crash} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={falls} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={family2} alt="" className="circleImg" />
                    <p></p>
                </div>
                <div className="circulateImg">
                    <img src={family3} alt="" className="circleImg" />
                    <p></p>
                </div>
            
             
            </Carousel>


        </div>
    )
}
export default Gallery