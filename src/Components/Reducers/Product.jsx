import React, { useContext, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import Stars from "./Stars";
import { ProductContext } from "../../Context/ProductContext";
import "animate.css";

import ProductCarousel from "./ProductCarousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCard = ({ Product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleChangeImageNext = () => {
    if (imageIndex < Product.images.length - 1) {
      setImageIndex((curr) => curr + 1);
    }
  };

  const handleChangeImagePrev = () => {
    if (imageIndex != 0) {
      setImageIndex((curr) => curr - 1);
    }
  };
  return (
    <div
      className="h-fit pb-5 pt-2 max-h-fit bg-gray-300 flex justify-center rounded-lg"
      id="card-container"
    >
      <div id="card-body" className="w-max ">
        <div className="overflow-hidden px-3">
          <h1
            className="text-2xl text-start font-roboto whitespace-nowrap text-ellipsis overflow-hidden"
            id="card-title"
          >
            {Product?.title}
          </h1>
        </div>

        <div className=" flex items-center justify-center">
          <button className="px-2" onClick={handleChangeImagePrev}>
            <IoIosArrowDropleftCircle size={32} color="#15133C" />
          </button>
          {/* <img
            className="sm:w-40 sm:h-64 w-32 h-64"
            src={Product?.images[imageIndex]}
            alt={Product?.title}
          /> */}
          <div>
            <ProductCarousel images={Product?.images} />
          </div>

          <button className="px-2" onClick={handleChangeImageNext}>
            <IoIosArrowDroprightCircle size={32} color="#15133C" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({ Product, setIsOpen }) => {
  const { handleAddProducts } = useContext(ProductContext);

  const handleOpenModal = (setIsOpen) => {
    setIsOpen((curr) => !curr);
  };

  return (
    <>
      <div className="porduct-details ps-4 pe-4">
        <h1 className="font-roboto">Description</h1>
        <p className="text-gray-700 line-clamp-2">{Product?.description}</p>

        <h1 className="font-roboto pt-3">Rating</h1>
        <div>
          <Stars stars={Product?.rating} />
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="pt-3 font-roboto">Price</h1>
            <p className="font-kanit text-2xl font-semibold text-slate-700">
              &#36; {Product?.price}
            </p>
          </div>

          <div>
            <button
              className="flex items-center text-white rounded-md bg-violet-600 px-6 py-1.5"
              onClick={() => {
                handleAddProducts(Product);
                handleOpenModal(setIsOpen);
              }}
            >
              Add &nbsp; <FaCartArrowDown />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Product = ({ Product, setIsOpen }) => {
  return (
    <div key={Product?.id} className="h-428 shadow-lg rounded-md">
      <ProductCard Product={Product} />
      <ProductDetails Product={Product} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Product;
