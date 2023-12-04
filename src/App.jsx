import ProfileEdit from "./Components/EditProfileexc/ProfileEdit";
import ItemsList from "./Components/FilteringList/ItemsList";
import ViewTree from "./Components/Places/ViewTree";
import Reducers from "./Components/Reducers/Reducers";
import Header from "./Components/Reducers/Header";
import ProductProvider from "./Context/ProductContext";
import Cart from "./Components/Reducers/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductProvider>
                <Header />
                <div className="flex flex-col w-screen text-xl items-center">
                  <Reducers />
                </div>
              </ProductProvider>
            }
          />

          <Route path="/cart" element={<ProductProvider><Cart/></ProductProvider>}/>
        </Routes>
      </BrowserRouter>

      {/* <Scientists/> */}
      {/* <Test /> */}
      {/* <Objects/> */}
      {/* <ClockTest/> */}
      {/* <ProfileEdit/> */}
      {/* <ItemsList/> */}
      {/* <Grid/> */}

      {/*  */}
      {/* <ProductProvider>
        <Cart />
      </ProductProvider> */}
    </>
  );
}

export default App;
