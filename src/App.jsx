import ProfileEdit from "./Components/EditProfileexc/ProfileEdit";
import ItemsList from "./Components/FilteringList/ItemsList";
import ViewTree from "./Components/Places/ViewTree";
import Reducers from "./Components/Reducers/Reducers";
import Header from "./Components/Reducers/Header";
import ProductProvider from "./Context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/Reducers/MainLayout";
import Cart from "./Components/Reducers/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
