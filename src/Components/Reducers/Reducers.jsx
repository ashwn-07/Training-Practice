import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "../../api/axios.js";
import ProductList from "./ProductList.jsx";

const reducerFunction = (products, action) => {
  switch (action.type) {
    case "populate": {
      return action.products;
    }
  }
};

const Reducers = () => {
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

  // function handleDeleteProducts(productid) {}

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Reducers;
