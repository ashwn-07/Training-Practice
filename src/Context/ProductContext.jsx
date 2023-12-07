import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import cartProductReducer from "../Components/Reducers/cartProductReducer";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  
const [cartproducts, dispatchProduct] = useReducer(cartProductReducer, []);

const handleAddProducts = (product) => {
    console.log("button clicked", product.title)
    dispatchProduct({
      type: "Cart",
      product: product,
    });
  };

  return (
    <ProductContext.Provider value={{ cartproducts, dispatchProduct, handleAddProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
 
export default ProductProvider;
