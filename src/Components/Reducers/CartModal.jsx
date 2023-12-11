import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "animate.css";
import { ProductContext } from "../../Context/ProductContext";
import { FaCartArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CartModal = ({ modalRef }) => {
  const navigate = useNavigate();
  const { cartproducts } = useContext(ProductContext);
  const [show, setShow] = useState("hidden");
  const [hover, setHover] = useState(false);
  const initialRender = useRef(true);

  const handleClick = () => {
    navigate("/cart");
  };

  useEffect(() => {

    let timeOutId;
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setShow("visible");
      console.log(hover, "hoverState");
      if (!hover) {
        timeOutId = setTimeout(() => {
          console.log("triggered timeout");
          setShow("hidden");
        }, 6000);
      }
    }

    return () => {
      clearInterval(timeOutId);
      console.log("clean up ran");
    };
  }, [cartproducts, hover]);

  // const handleHover = () => {

  //   setHover(true);

  // }

  return (
    <>
      <div
        ref={modalRef}
        className={`h-96 w-1/5 m-0 bg-stone-100 shadow-lg border border-gray-400
         rounded text-gray-900 fixed right-10 top-8 z-30 animate__bounceIn  ${show}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {" "}
        <div className="overflow-auto h-5/6">
          {cartproducts.map((item, index) => (
            <div
              key={item.id}
              className=" mx-5 mt-4 py-2 border-b border-gray-400"
            >
              <div className="flex">
                <img className="h-28 w-24" src={item.thumbnail} alt="" />
                <div className="flex flex-col w-full items-end pe-5">
                  <h1>{item.title}</h1>
                  <p>&#36; {item.price}</p>
                  <p className="text-sm">QTY {item.qty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-end pe-8">
          <button
            className="text-white bg-green-600 w-24 flex items-center justify-center rounded py-1"
            onClick={handleClick}
          >
            {" "}
            Go to &nbsp;
            <FaCartArrowDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
