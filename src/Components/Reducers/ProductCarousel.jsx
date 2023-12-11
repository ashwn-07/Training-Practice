import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = ({ images }) => {
    console.log(images);
  return (
    <>
    {/* //sm:w-40 sm:h-64 w-32 h-64 */}
    <div className="carousel-wrapper bg-red-700">
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
</div>
    
        {/* <Carousel>
            <div className="carousel-wrapper">

            
          {images.map((image, index) => (
            <div>
              <img src={image} alt="img22"/>
            </div>
          ))}
          </div>
       </Carousel> */}
      
    </>
  );
};

export default ProductCarousel;
