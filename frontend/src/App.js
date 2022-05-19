import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import BuyerProfile from "./components/Buyer/BuyerProfile";
import Login from "./components/common/Login";
import FoodList from "./components/food/Food"
import FoodRegister from "./components/common/FoodRegister";
import BuyerNav from "./components/templates/buyerNav";
import MyOrder from "./components/Buyer/MyOrder";
import BuyerLogout from "./components/Buyer/Logout";
import BuyerEdit from "./components/Buyer/EditProfile";
import Favourites from "./components/Buyer/Favourites";
import VendorNav from "./components/templates/vendorNav";
import VendorMenu from "./components/vendor/Menu";
import VendorEdit from "./components/vendor/EditProfile";
import Statistics from "./components/vendor/Statistics"
import VendorDashboard from "./components/vendor/VendorDashboard";
import VendorProfile from "./components/vendor/VendorProfile";
import VendorLogout from "./components/vendor/VendorLogout";
import EditFood from "./components/vendor/EditFood"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const BuyerLayout = () => {
  return (
    <div>
      <BuyerNav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const VendorLayout = () => {
  return (
    <div>
      <VendorNav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/buyerprofile" element={<BuyerLayout />}>
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/buyerprofile/foodlist" element={<FoodList />} />
          <Route path="/buyerprofile/myorder" element={<MyOrder />} />
          <Route path="/buyerprofile/buyeredit" element={<BuyerEdit />} />
          <Route path="/buyerprofile/favourites" element={<Favourites/>} />
          <Route path="/buyerprofile/buyerlogout" element={<BuyerLogout />} />
          <Route path="/buyerprofile/editbuyer/:id" element={<BuyerEdit />} />
        </Route>
        <Route path="/vendorprofile" element={<VendorLayout />}>
          <Route path="/vendorprofile" element={<VendorProfile />} />
          <Route path="/vendorprofile/orderstatus" element={<VendorDashboard />} />
          <Route path="/vendorprofile/menu" element={<VendorMenu />} />
          <Route path="/vendorprofile/vendoredit" element={<VendorEdit />} />
          <Route path="/vendorprofile/statistics" element={<Statistics/>} />
          <Route path="/vendorprofile/vendorlogout" element={<VendorLogout />} />
          <Route path="/vendorprofile/food" element={<FoodRegister />} />
          <Route path="/vendorprofile/menu/editfood/:id" element={<EditFood />} />
          <Route path="/vendorprofile/editvendor/:id" element={<VendorEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
