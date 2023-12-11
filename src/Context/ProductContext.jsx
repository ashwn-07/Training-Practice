import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import cartProductReducer from "../Components/Reducers/cartProductReducer";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [cartproducts, dispatchProduct] = useReducer(cartProductReducer, []);
  //const [productExists, setProductExists] = useState(false);

  const handleAddProducts = (product) => {
    let productIndex = -1;
    let currQty = 0;
    let productExists = null;

    if (cartproducts.length > 0) {
      productExists = cartproducts.find((item, index) => {
        if (item.id == product.id) {
          productIndex = index;
          // console.log("the index is" , index);
          if (item?.qty) {
            // console.log("the item qty is" , item.qty)
            currQty = item.qty + 1;
          }
          return true;
        }

        return false;
      });
    }

    productExists
      ? dispatchProduct({
          type: "productexists",
          productData: { productIndex, product, currQty },
        })
      : dispatchProduct({
          type: "Cart",
          product: { ...product, qty: 1 },
        });
  };

  useEffect(() => {
    console.log(cartproducts);
  }, [cartproducts]);

  return (
    <ProductContext.Provider
      value={{ cartproducts, dispatchProduct, handleAddProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
