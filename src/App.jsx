import ProfileEdit from "./Components/EditProfileexc/ProfileEdit";
import ItemsList from "./Components/FilteringList/ItemsList";
import ViewTree from "./Components/Places/ViewTree";
import Reducers from "./Components/Reducers/Reducers";
import cartProductReducer from "./Components/Reducers/cartProductReducer";
import { useReducer } from "react";
import Header from "./Components/Reducers/Header";
import ProductProvider from "./Context/ProductContext";
function App() {
  return (
    <>
      {/* <Scientists/> */}
      {/* <Test /> */}
      {/* <Objects/> */}
      {/* <ClockTest/> */}
      {/* <ProfileEdit/> */}
      {/* <ItemsList/> */}
      {/* <Grid/> */}

      <ProductProvider>
        <Header />
        <div className="flex flex-col w-screen text-xl items-center">
          <Reducers />
        </div>
      </ProductProvider>
    </>
  );
}

export default App;
