import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "../../api/axios.js";
import productlist from "./products.js";
import ProductList from "./ProductList.jsx";
import { addProduct } from "./products.js";


const reducerFunction = (products, action) => {
  switch (action.type) {
    case "populate": {
      return action.products;
    }
  }
};

const Reducers = ({ cartproducts, dispatchProduct }) => {
  const [products, dispatch] = useReducer(reducerFunction, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loading) {
          const response = await axios.get("/products");

          dispatch({
            type: "populate",
            products: response.data.products,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      setLoading((curr) => !curr);
    };
  }, []);

  const handleAddProducts = (product) => {
    dispatchProduct({
      type: "Cart",
      product: product,
    });
  };

  useEffect(() => {
    console.log("this is", cartproducts);
  }, [cartproducts]);

  function handleDeleteProducts(productid) {}

  return (
    <>
      <ProductList
        products={products}
        onAddProduct={handleAddProducts}
        onDeleteProduct={handleDeleteProducts}
      />
    </>
  );
};

export default Reducers;
