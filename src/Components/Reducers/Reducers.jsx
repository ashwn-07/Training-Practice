import React, { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "../../api/axios.js";
import ProductList from "./ProductList.jsx";
import { ProductContext } from "../../Context/ProductContext";



const reducerFunction = (products, action) => {
  switch (action.type) {
    case "populate": {
      return action.products;
    }
  }
};

const Reducers = ( ) => {
  const {dispatchProduct}  =useContext(ProductContext);
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

  


  function handleDeleteProducts(productid) {}

  return (
    <>
      <ProductList
        products={ products }
        // onAddProduct={ handleAddProducts }
        onDeleteProduct={ handleDeleteProducts }
      />
    </>
  );
};

export default Reducers;
