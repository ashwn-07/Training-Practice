import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "animate.css";
import { ProductContext } from "../../Context/ProductContext";
import { FaCartArrowDown } from "react-icons/fa6";

const CartModal = ({ modalRef }) => {
  const { cartproducts } = useContext(ProductContext);
  const [show, setShow] =useState("hidden");
  
  let body = document.body;
  useEffect(() => {
  setShow((curr)=>curr="");

setTimeout(()=>{
setShow((curr)=> curr="hiddden")
}, 9000)

  }, [cartproducts]);

  
  return (
    <>
    
      
      <div
        open
        ref={modalRef}
        className= {`h-96 w-1/5 m-0 bg-stone-100 shadow-lg border border-gray-400
         rounded text-gray-900 fixed right-10 top-8 z-30 animate__bounceIn  ${show}`} 
      >
        {" "}
        <div className="overflow-auto h-5/6">
          {cartproducts.map((item, index) => (
            <div className=" mx-5 mt-4 py-2 border-b border-gray-400">
              <div className="flex">
                <img className="h-28 w-24" src={item.thumbnail} alt="" />
                <div className="flex flex-col w-full items-end pe-5">
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-end pe-8">
        <button className="text-white bg-green-600 w-24 flex items-center justify-center rounded py-1"> Go to &nbsp;<FaCartArrowDown /></button>
        </div>
        
      </div>
   
    </>
  );
};

export default CartModal;
