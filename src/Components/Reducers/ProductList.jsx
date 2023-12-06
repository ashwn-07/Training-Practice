import React, { useRef, useState } from "react";
import Product from "./Product";
import CartModal from "./CartModal";

const ProductList = ({ products }) => {

const modalRef = useRef();
const [isOpen, setIsOpen] = useState(false);


  
return (
    <>
      <main className="px-12 mt-24 min-h-screen relative">
      <CartModal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen}/>
        <section className="grid md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-5 min-h-screen">
          {products.map((product, index)=>
          <Product key={product?.id} Product= {product} setIsOpen={setIsOpen} />
          )}
        </section>         
      </main>
    </>
  );
};

export default ProductList;
