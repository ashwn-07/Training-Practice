const cartProductReducer = (cartproducts, action) => {
 
  switch (action.type) {
    case "Cart": {
      
      return [...cartproducts, action.product];
    }
    case "productexists": {
      const { productIndex } = action.productData;
      const { product } = action.productData;
      const updatedProductQty = [...cartproducts];

      updatedProductQty[action.productData.productIndex] = {
        ...product,
        qty: action.productData.currQty,
      };

      return updatedProductQty;
    }
  }
};

export default cartProductReducer;
