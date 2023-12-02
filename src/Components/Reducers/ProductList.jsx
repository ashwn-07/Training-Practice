import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {

  return (
    <>
      <main className="px-12  mt-24 min-h-screen">
        <section className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-5 min-h-screen">
          {products.map((product, index)=>
          <Product key={product?.id} Product ={product} />
          )}
        </section>
      </main>
    </>
  );
};

export default ProductList;
