import React, { useEffect, useRef } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import 'animate.css'

const CartModal = ({ isOpen, modalRef, setIsOpen }) => {
  let body = document.body
  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    
    }
  }, [isOpen]);

  const handleClick = () => {
    modalRef.current.close();
    setIsOpen(curr=>!curr);
  
  };

  return (
    <>
      <dialog
        ref={modalRef}
        className="h-24 w-72  bg-red-50 rounded-xl text-gray-900 backdrop:bg-gray-800/50 animate__bounceIn"
      >
        <div className="h-full">
          <button
            className="float-right px-4 bg-red-500 text-white"
            onClick={handleClick}
          >
            X
          </button>

          <div className="overflow-hidden h-full flex flex-col items-center justify-center">
            <p className="text-center"> Item Added to Cart</p>
            <button className="bg-lime-600 flex items-center justify-center px-3 text-white py-1 rounded-lg mt-2">
              {" "}
              Cart <MdOutlineDoubleArrow size={28} />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
