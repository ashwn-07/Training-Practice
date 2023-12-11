
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselTest = () => {
  return (
    <><div className="carousel-wrapper">
    <Carousel>
        <div>
            <img src="../img-01.jpg" alt='img1'/>
        </div>
        <div>
            <img src="../img-02.jpg" alt='img2' />
        </div>
        <div>
            <img src="../img-03.jpg" alt='img3' />
        </div>
    </Carousel>
</div></>
  )
}

export default CarouselTest