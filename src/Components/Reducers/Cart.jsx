import React, { useContext, useEffect, useMemo, useState } from "react";
import BgSvg from "./BgSvg";
import { ProductContext } from "../../Context/ProductContext";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import MasterCardSvg from "./MasterCardSvg";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Item = ({ item, setTotalQty, totalQty }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    // Check if the item already exists in the cart
    const existingItemIndex = totalQty.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    console.log(existingItemIndex, item.title)
    if (existingItemIndex !== -1) {
      // Item exists, update its quantity
     
      setTotalQty((prevTotalQty) => {
        const updatedTotalQty = [...prevTotalQty];
        updatedTotalQty[existingItemIndex] = { ...item, qty: qty };
        return updatedTotalQty;
      });
    } else {
      // Item doesn't exist, add it to the cart
      setTotalQty((totalQty)=>[...totalQty, { ...item, qty: 1 }]);
    }
  }, [item, qty]);


  const handleQtyChange = (action) => {
    console.log("clicked", action);
    if (action === "increment") {
      setQty((curr) => curr + 1);
    } else {
      qty > 1 && setQty((curr) => curr - 1);
    }
  };

  useEffect(() => {
    console.log(qty);
  }, [qty]);

  useEffect(() => {
    setPrice(item.price * qty);
  }, [qty]);

  return (
    <div key={item.id} className="flex  mt-8 border-b border-gray-300 border-t">
      {/* bg-red-600 */}
      <img
        className="bg-lime-600 sm:w-40 sm:h-40 w-32 h-64 rounded-lg mx-8"
        src={item.thumbnail}
        alt="hello"
      />

      <div className="w-3/5  text-xl px-4 py-4">
        <h4>{item.title}</h4>
        <p className="text-sm pt-2">{item.description}</p>

        <div className="w-fit flex text-base mt-3 border rounded border-pink-400">
          <div className=" px-3 border-r border-pink-400">
            {" "}
            <button onClick={() => handleQtyChange("decrement", item.price)}>
              -
            </button>
          </div>
          <div className="px-3">{qty}</div>
          <div className=" px-3 border-l border-pink-400">
            {" "}
            <button onClick={() => handleQtyChange("increment", item.price)}>
              +
            </button>
          </div>
        </div>
      </div>

      <div className=" grow flex text-gray-500 text-3xl mt-3 pt-10 justify-between">
        {/* bg-stone-900 */}
        <p>
          {/* bg-slate-400 */}
          <span className="text-3xl ">&#8377;</span>
          {item.price} <br />
          {price}
        </p>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartproducts } = useContext(ProductContext);
  const [totalQty, setTotalQty] = useState(cartproducts); //an array of porducts in the cart and its total qty
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    console.log(totalQty)
    totalQty.forEach((item) => {
     console.log(item, "hiiii")      
      if(item?.qty)
      totalPrice = totalPrice + ( item.price * item.qty );
    });

    setFinalPrice(totalPrice);
  }, [totalQty]);

  return (
    <>
      <main className="flex flex-col  sm:flex-row">
        <section className=" sm:w-8/12 relative ">
          {/* bg-red-900 */}
          <BgSvg />
          <div className="absolute sm:left-64  sm:top-24 w-full">
            <h1 className="text-6xl font-crete space-x-3 tracking-wide text-gray-500">
              Shopping Cart{" "}
              <span className="text-xl text-pink-600"> 3 items</span>
            </h1>
          </div>

          {cartproducts.map((item, key) => (
            <Item item={item} setTotalQty={setTotalQty} totalQty={totalQty} />
          ))}
        </section>
        <section className="sm:flex-grow h-screen  text-white">
          <div className="address-container flex justify-between px-4 mt-4 font-poppins">
            <div className="adress-details">
              <h4 className="text-slate-900 text-2xl font-poppins">
                Jessica Joy
              </h4>
              <span className="text-slate-600 text-lg">
                <p>Montpilier 30,</p>
                <p>1070 Paris,</p>
                <p>France</p>
              </span>
            </div>

            <button className="text-pink-400 text-xl me-8">edit</button>
          </div>

          <div className="text-black payment-container  flex justify-between px-4 mt-4 font-poppins">
            <div className="payment-details">
              <h4 className="text-slate-900 text-xl font-poppins flex items-center">
                Payment Method{" "}
                <span className="ms-3">
                  <FaRegQuestionCircle color="grey" size={20} />
                </span>
              </h4>
              <span className="text-slate-600 text-lg">
                <p>credit card</p>
                <div className="flex space-x-10">
                  {" "}
                  <p>
                    <span className="leading-10 text-3xl">.... .... .... </span>
                    5050
                  </p>{" "}
                  <MasterCardSvg />
                </div>
              </span>
            </div>

            <button className="text-pink-400 text-xl me-8"> edit</button>
          </div>

          <div className="text-black promo-container mt-6 px-4 text-xl">
            <h1> Do you have a promo code?</h1>
            <h6 className="text-sm text-slate-600">
              you can apply only one per product
            </h6>

            <div className="flex items items-center space-x-2">
              <input
                className="border-2 rounded-md px-2 py-2 mt-3"
                type="text"
                placeholder="enter your code"
              />
              <button className="bg-gray-700 text-white px-8 py-2 h-fit mt-3 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          <div className="text-black flex items-price-container mt-11 px-4 text-xl ">
            {/* bg-red-900 */}
            {/* &#8377 */}
            <div className="w-3/6  space-y-2 text-slate-700">
              {/* bg-red-500 */}
              <p>Subtotal</p>
              <p>Shipping Cost</p>
              <p>Discount</p>
              <p>Total</p>
            </div>
            <div className="w-3/6  space-y-2 ps-4 ">
              {/* bg-red-600 */} <p> &#8377; {finalPrice}</p>
              <p>&#8377; 0.00</p>
              <p>&#8377; 0.00</p>
              <p>{finalPrice}</p>
            </div>
          </div>
          <div className=" w-fit px-4 mt-11">
            <button className="bg-pink-600 flex items-center px-4 py-2 rounded-lg">
              {" "}
              <MdOutlineShoppingCartCheckout size={24} />
              &nbsp; CHECKOUT
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
