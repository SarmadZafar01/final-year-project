import React ,{ useEffect } from "react";
import  NavBar from "./navbar"; // Import named exports
import { Routes, Route } from 'react-router-dom';
import Login from "./Login/login";
import Signup from "./Login/signup";
import Forgot from "./Login/forgotpassword";
import NewForgot from "./Login/forgetpassword2";
import Home from "./Home/home";
import About from "./INFO/about us";
import Imreg from "./image recognition/imagereg";
import Contact from "./Chat/contact";
import Modification from "./modification/modification";
import Modify from "./modification/city";
import Toyota from "./modification/toyota";
import Pro from "./profile/profile";
import MyOrder from "./myorder";
import Cart from "./cart";
import CarM from "./mycar";
import TrackOrder from "./trackorrder";
import View from "./Home/view";
import Chat from "./Chat/chat";
import {Toaster} from "react-hot-toast"
import AddProduct from "./admin/AddProduct"
import Adminsignup from  "./admin/adminsignup"
import AdminProduct from "./admin/Adminproduct";
import AdminDashbord from "./admin/AdminDashbord";
import AdminOrder from "./admin/AdminOrder"
import AdminOrderDetail from "./admin/AdminOrderDetail";

import AdminLiveChat from "./admin/AdminLiveChat"

import {  setData} from "../redux/productSlice"
import { useDispatch, useSelector } from "react-redux";
import Civic from "./modification/civic";
import UpdateProduct from "./admin/adminupdateproduct";
import Toyotablue from "./modification/toyotablue";
import Toyotared from "./modification/toyotared";
import Cityblue from "./modification/cityblue";
import Cityred from "./modification/cityred";
import Civicblue from "./modification/civicblue";
import Civicred from "./modification/civicred";
import Toyotasunroof from "./modification/toyotasunroof";
import Toyotabluesunroof from "./modification/toyotabluesunroof";
import Toyotaredsunroof from "./modification/toyotasunroofred";
import Modifysunroof from "./modification/citysunroof";
import Modifysunroofblue from "./modification/citybluesunroof";
import Modifysunroofred from "./modification/citysunroofred";
import Civicsunroof from "./modification/civicsunroof";
import Civicsunroofblue from "./modification/civicsunroofblue";
import Civicsunroofred from "./modification/civicsunroofred";



function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  

useEffect (()=>{
  (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      //console.log(resData)

      dispatch(setData(resData))
  })()
},[])
console.log(productData)


  return (
    <div>
    <Toaster />
      <Routes>
        <Route path="" element={<NavBar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/modification" element={<Modification />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/toyota" element={<Toyota />} />
        <Route path="/civic" element={<Civic />} />
        <Route path="/toyotablue" element={<Toyotablue />} />
        <Route path="/toyotared" element={<Toyotared />} />
        <Route path="/cityblue" element={<Cityblue />} />
        <Route path="/cityred" element={<Cityred />} />

        <Route path="/Tsunroof" element={<Toyotasunroof />} />
        <Route path="/Tsunroofblue" element={<Toyotabluesunroof />} />
        <Route path="/Tsunroofred" element={<Toyotaredsunroof />} />
        <Route path="/Csunroof" element={<Modifysunroof />} />
        <Route path="/Csunroofblue" element={<Modifysunroofblue />} />
        <Route path="/Csunroofred" element={<Modifysunroofred />} />
        <Route path="/CIsunroofred" element={<Civicsunroofred />} />

        <Route path="/CIsunroof" element={<Civicsunroof />} />
        <Route path="/CIsunroofblue" element={<Civicsunroofblue />} />

        <Route path="/civicblue" element={<Civicblue />} />
        <Route path="/civicred" element={<Civicred />} />
        <Route path="/update/:id" element={<UpdateProduct />} />

      

        <Route path="/image-recognition" element={<Imreg />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/profile" element={<Pro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/forgetpassword2" element={<NewForgot />} />
        <Route path="/cart" element={<Cart />} />
      
       
        <Route path="/trackorder" element={<TrackOrder />} />
<Route path="/muorder" element={<MyOrder />} />
<Route path="/car" element={<CarM />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/View" element={<View />} /> */}
        <Route path="/View/:filterby" element={<View />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Admin" element={<Adminsignup />} />
        <Route path="/Dashbord" element={<AdminDashbord />} />
        <Route path="/AdminProduct" element={<AdminProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
     
        <Route path="/Order" element={<AdminOrder />} />
        <Route path="/OrderDetail" element={<AdminOrderDetail />} />
        <Route path="/Livechat" element={<AdminLiveChat />} />
       

      </Routes>
    </div>
  );
}

export default App;
