import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='slider'>
            <Carousel fade>
                <Carousel.Item id="carousel-item-1">
                    
                    <Carousel.Caption className='top-50 position-absolute'>
                        <h1 className='display-2'>Shutter Studio</h1>
                        <p>Within every man and woman, a secret is hidden, and as a photographer, it is my task to reveal it if I can.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="carousel-item-2">
                    
                    <Carousel.Caption className='top-50 position-absolute'>
                        <h1 className='display-2'>Shutter Studio</h1>
                        <p>Photography is the story I fail to put into words.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carousel-item-3'>
                    

                    <Carousel.Caption className='top-50 position-absolute'>
                        <h1 className='display-2'>Shutter Studio</h1>
                        <p>A camera is just a medium to capture what you have in your vision, and vision is something that cannot be bought.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carousel-item-4'>
                    

                    <Carousel.Caption className='top-50 position-absolute'>
                        <h1 className='display-2'>Shutter Studio</h1>
                        <p>No place is boring, if you've had a good night's sleep and have a pocket full of unexposed film.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;