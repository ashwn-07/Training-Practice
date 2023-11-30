import ProfileEdit from "./Components/EditProfileexc/ProfileEdit";
import ItemsList from "./Components/FilteringList/ItemsList";
import ViewTree from "./Components/Places/ViewTree";
import Reducers from "./Components/Reducers/Reducers";
import Grid from "./Grid";
import cartProductReducer from "./Components/Reducers/cartProductReducer";
import { useReducer } from "react";
function App() {
  
  const [cartproducts, dispatchProduct] = useReducer(cartProductReducer, []);

  return (
    <>
      {/* <Scientists/> */}
      {/* <Test /> */}
      {/* <Objects/> */}
      {/* <ClockTest/> */}
      {/* <ProfileEdit/> */}
      <div className="flex flex-col w-screen text-xl items-center">
       {/* <ItemsList/> */}
       <Reducers cartproducts={cartproducts} dispatchProduct={dispatchProduct}/>
      </div>
      {/* <Grid/> */}
    </>
  );
}

export default App;
