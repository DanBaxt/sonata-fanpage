
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
class CarouselA extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./assets/satour.jpg" alt ="tourDate"/>
                    <p className="legend">Check out Tour Dates</p>
                </div>
                <div>
                    <img src="./assets/video.jpg" alt = "musicVideo"/>
                    <p className="legend">Watch their newest music videos</p>
                </div>
                <div>
                    <img src="./assets/learn.jpg" alt = "history"/>
                    <p className="legend">Learn more about the band</p>
                </div>
            </Carousel>
        );
    }
};
 


export default CarouselA;
