const cartProductReducer = (cartproducts, action) =>{
    switch(action.type){
    
      case "Cart":{
     
        return [...cartproducts, action.product]
       
    
      }
    }
    
    } 

    export  default cartProductReducer;