import React, { useContext } from "react";
import BgSvg from "./BgSvg";
import { ProductContext } from "../../Context/ProductContext";

const Cart = () => {
  const { cartproducts } = useContext(ProductContext);
  console.log(cartproducts);
  return (
    <>
      <main className="flex flex-col  sm:flex-row">
        <section className=" sm:w-8/12  relative bg-red-900">
          <BgSvg />
          <div className="absolute sm:left-64  sm:top-24 w-full">
            <h1 className="text-6xl font-crete space-x-3 tracking-wide text-gray-500">
              Shopping Cart{" "}
              <span className="text-xl text-pink-600"> 3 items</span>
            </h1>
          </div>

          <div className=" product-container grid grid-cols-3 bg-red-500 mt-4 space-x-11">
            <img
              className="sm:w-40 sm:h-72 w-32 h-64 rounded-lg"
              src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
              alt="hello"
              
            />

            <div className=" grow bg-gray-700 text-3xl">helooo</div>
            <div className="bg-stone-900">heluuuu</div>
          </div>
        </section>
        <section className="bg-lime-900 sm:flex-grow">payment</section>
      </main>
    </>
  );
};

export default Cart;
