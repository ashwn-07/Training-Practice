import React, { useState } from "react";
import Reducers from "./Reducers";
import Header from "./Header";

const MainLayout = () => {
  const [products, setProducts] = useState("test")
  return (
    <>
      <Header products={products} setProducts={setProducts} />
      <div className="flex flex-col w-screen text-xl items-center">
        <Reducers />
      </div>
    </>
  );
};

export default MainLayout;
