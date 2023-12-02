import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../../Context/ProductContext";

const Header = ({}) => {
  const { cartproducts } = useContext(ProductContext);
  
  return (
    <>
      <header className="py-4 top-0 fixed w-full bg-slate-100">
        <nav className="flex justify-between">
          <div className="font-roboto text-3xl ps-4">My App</div>
          <div className="relative">
            <ul
              className="pe-8 text-2xl"
              onClick={() => console.log("clicked")}
            >
              <li className="flex items-center">
                <FaShoppingCart />
              </li>
            </ul>
            <p className="absolute bottom-6 left-4 text-sm bg-red-600 text-slate-100 px-2 rounded-full -z-10">
              {" "}
              {cartproducts.length}
            </p>
          </div>{" "}
        </nav>
      </header>
    </>
  );
};

export default Header;
