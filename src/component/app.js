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
import Toyotaback from "./modification/toyotaback";
import Toyotabackk from "./modification/toyotawhitebackk";
import Toyotabackkk from "./modification/toyotawhitebackkk";
import Toyotablueback from "./modification/toyotablueback";
import Toyotabluebackk from "./modification/toyotabluebackk";
import Toyotabluebackkk from "./modification/toyotabluebackkk";
import Toyotaredback from "./modification/toyotaredback";
import Toyotaredbackk from "./modification/toyotaredbackk";
import Toyotaredbackkkk from "./modification/toyotaredbackkk";
import Citywhiteback from "./modification/citywhiteback";
import Citywhitebackk from "./modification/citywhitebackk";
import Citywhitebackkk from "./modification/citywhitebackkk";
import Cityblueback from "./modification/cityblueback";
import Citybluebackk from "./modification/citybluebackk";
import Citybluebackkk from "./modification/citybluebackkk";
import Cityredback from "./modification/cityredback";
import Cityredbackk from "./modification/cityredbackk";
import Cityredbackkk from "./modification/cityredbackkk";
import Civicwhiteback from "./modification/civicwhiteback";
import Civicwhitebackk from "./modification/civicwhitebackk";
import Civicwhitebackkk from "./modification/civicwhitebackkk";
import Civicblueback from "./modification/civicblueback";
import Civicbluebackk from "./modification/civicbluebackk";
import Civicbluebackkk from "./modification/civicbluebackkk";
import Civicredback from "./modification/civicredback";
import Civicredbackk from "./modification/civicredbackk";
import Civicredbackkk from "./modification/civicredbackkk";
import Toyotawhitetiree from "./modification/toyorawhitetire";
import Toyotawhitetire from "./modification/toyotawhitetiree";
import Toyotabluetiree from "./modification/toyotabluetiree";
import Toyotabluetire from "./modification/toyotabluetire";
import Toyotaredtiree from "./modification/toyotaredtiree";
import Toyotaredtire from "./modification/toyotaredtire";
import Citywhitetiree from "./modification/citywhitetiree";
import Citywhitetire from "./modification/citywhitetire";
import Citybluetiree from "./modification/citybluetiree";
import Citybluetire from "./modification/citybluetire";
import Cityredtiree from "./modification/cityredtiree";
import Cityredtire from "./modification/cityredtire";
import Civicwhitetiree from "./modification/civicwhitetiree";
import Civicwhitetire from "./modification/civicwhitetire";
import Civicbluetiree from "./modification/civicbluetiree";
import Civicbluetire from "./modification/civicbluetire";
import Civicredtiree from "./modification/civicredtiree";
import Civicredtire from "./modification/civicredtire";
import Toyotawhitetiregreen from "./modification/toyotawhitetiregreen";
import Toyotawhitetirepurple from "./modification/toyotawhitetirepurple";
import Toyotabluetiregreen from "./modification/toyotabluetiregreen";
import Toyotabluetirepurple from "./modification/toyotabluetirepurple";
import Toyotaredtiregreen from "./modification/toyotaredtiregreen";
import Toyotaredtirepurple from "./modification/toyotaredtirepurple";
import Citywhitetiregreen from "./modification/citywhitetiregreen";
import Citywhitetirepurple from "./modification/citywhitetirepurple";
import Citybluetireegreen from "./modification/citybluetiregreen";
import Citybluetireepurple from "./modification/citybluetirepurple";
import Cityredtiregreen from "./modification/cityredtiregreen";
import Cityredtirepurple from "./modification/cityredtirepurple";
import Civicwhitetiregreen from "./modification/civicwhitetiregreen";
import Civicwhitetirepurple from "./modification/civicwhitetirepurple";
import Civicbluetiregreen from "./modification/civicbluetiregreen";
import Civicbluetirepurple from "./modification/civicbluetirepurple";
import Civicredtiregreen from "./modification/civicredtiregreen";
import Civicredtirepurple from "./modification/civicrredtirepurple";
import Toyotawhitesticker from "./modification/toyotawhitegassticker";
import Toyotawhitestickerr from "./modification/toyotawhitestickerr";
import Toyotawhitestickerrr from "./modification/toyotawhitestickerrr";
import Toyotabluesticker from "./modification/toyotabluesticker";
import Toyotabluestickerr from "./modification/toyotabluestickerr";
import Toyotabluestickerrr from "./modification/toyotabluestickerrr";
import Toyotaredsticker from "./modification/toyotaredsticker";
import Toyotaredstickerr from "./modification/toytaredstickerr";
import Toyotaredstickerrr from "./modification/toyotaredstickerrr";
import Citywhitesticker from "./modification/citywhitesticker";
import Citywhitestickerr from "./modification/citywhitestickerr";
import Citywhitestickerrr from "./modification/citywhitestickerrr";
import Citybluesticker from "./modification/citybluesticker";
import Citybluestickerr from "./modification/citybluestickerr";
import Citybluestickerrr from "./modification/citybluestickerrr";
import Cityredsticker from "./modification/cityredsticker";
import Cityredstickerr from "./modification/cityredstickerr";
import Cityredstickerrr from "./modification/cityredstickerrr";
import Civicwhitesticker from "./modification/civicwhitesticker";
import Civicwhitestickerr from "./modification/civicwhitestickerr";
import Civicwhitestickerrr from "./modification/civicwhitestickerrr";
import Civicbluesticker from "./modification/civicbluesticker";
import Civicbluestickerr from "./modification/civicbluestickerr";
import Civicbluestickerrr from "./modification/civicbluestickerrr";
import Civicredsticker from "./modification/civicredsticker";
import Civicredstickerr from "./modification/civicredstickerr";
import Civicredstickerrr from "./modification/civicredstickerrr";
import Toyotawhitesidesticker from "./modification/toyotawhitesidesticker";
import Toyotawhitesidestickerr from "./modification/toyotawhitesidestickerr";
import Toyotabluesidesticker from "./modification/toyotabluesidesticker";
import Toyotabluesidestickerr from "./modification/toyotabluesidestickerr";
import Toyotaredsidesticker from "./modification/toyotaredsidesticker";
import Toyotaredsidestickerr from "./modification/toyotaredsidestickerr";
import Citywhitesidesticker from "./modification/citywhitesidesticker";
import Citywhitesidestickerr from "./modification/citywhitesidestickerr";
import Citybluesidesticker from "./modification/citybluesidesticker";
import Citybluesidestickerr from "./modification/citybluesidestickerr";
import Cityredsidesticker from "./modification/cityredsidesticker";
import Cityredsidestickerr from "./modification/cityredsidestickerr";
import Civicwhitesidesticker from "./modification/civicwhitesidesticker";
import Civicwhitesidestickerr from "./modification/civicwhitesidestickerr";
import Civicbluesidesticker from "./modification/civicbluesidesticker";
import Civicbluesidestickerr from "./modification/civicbluesidestcikerr";
import Civicredsidesticker from "./modification/civicredsidesticker";
import Civicredsidestickerr from "./modification/civicredsidestickerr";
import Toyotawhitebacksticker from "./modification/toyotawhitebacksticker";
import Toyotawhitebackstickerr from "./modification/toyotawhitebackstickerr";
import Toyotawhitebackstickerrr from "./modification/toyotawhitebackstickerrr";
import Toyotabluebacksticker from "./modification/toyotabluebackstiker";
import Toyotabluebackstickerr from "./modification/toyotabluebackstickerr";
import Toyotabluebackstickerrr from "./modification/toyotabluebackstickerrr";
import Toyotaredbacksticker from "./modification/toyotaredbacksticker";
import Toyotaredbackstickerr from "./modification/toyotaredbackstickerr";
import Toyotaredbackstickerrr from "./modification/toyotaredbackstickerrr";
import Citywhitebacksticker from "./modification/citywhitebacksticker";
import Citywhitebackstickerr from "./modification/citywhitebackstickerr";
import Citywhitebackstickerrr from "./modification/citywhitebackstickerrr";
import Citybluebacksticker from "./modification/citybluebacksticker";
import Citybluebackstickerr from "./modification/citybluebackstickerr";
import Citybluebackstickerrr from "./modification/citybluebackstickerrr";
import Cityredbacksticker from "./modification/cityredbacksticker";
import Cityredbackstickerr from "./modification/cityredbackstickerr";
import Cityredbackstickerrr from "./modification/cityredbackstickerrr";
import Civicwhitebacksticker from "./modification/civicwhitebacksticker";
import Civicwhitebackstickerr from "./modification/civicwhitebackstickerr";
import Civicwhitebackstickerrr from "./modification/civicwhhitebackstickerrr";
import Civicbluebacksticker from "./modification/civicbluebacksticker";
import Civicbluebackstickerr from "./modification/civicbluebackstickerr";
import Civicbluebackstickerrr from "./modification/civicbluebackstickerrr";
import Civicredbacksticker from "./modification/civicredbacksticker";
import Civicredbackstickerr from "./modification/civicredbackstickerr";
import Civicredbackstickerrr from "./modification/civicredbackstickerrr";



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

        <Route path="/toyotawhiteback" element={<Toyotaback />} />
        <Route path="/toyotawhitebackk" element={<Toyotabackk />} />
        <Route path="/toyotawhitebackkk" element={<Toyotabackkk />} />

        <Route path="/toyotablueback" element={<Toyotablueback />} />
        <Route path="/toyotabluebackk" element={<Toyotabluebackk />} />
        <Route path="/toyotabluebackkk" element={<Toyotabluebackkk />} />

        <Route path="/toyotaredback" element={<Toyotaredback />} />
        <Route path="/toyotaredbackk" element={<Toyotaredbackk />} />
        <Route path="/toyotaredbackkk" element={<Toyotaredbackkkk />} />

        <Route path="/citywhiteback" element={<Citywhiteback />} />
        <Route path="/citywhitebackk" element={<Citywhitebackk />} />
        <Route path="/citywhitebackkk" element={<Citywhitebackkk />} />

        <Route path="/cityblueback" element={<Cityblueback />} />
        <Route path="/citybluebackk" element={<Citybluebackk />} />
        <Route path="/citybluebackkk" element={<Citybluebackkk />} />

        <Route path="/cityredback" element={<Cityredback />} />
        <Route path="/cityredbackk" element={<Cityredbackk />} />
        <Route path="/cityredbackkk" element={<Cityredbackkk />} />

        <Route path="/civicwhiteback" element={<Civicwhiteback />} />
        <Route path="/civicwhitebackk" element={<Civicwhitebackk />} />
        <Route path="/civicwhitebackkk" element={<Civicwhitebackkk />} />

        <Route path="/civicblueback" element={<Civicblueback />} />
        <Route path="/civicbluebackk" element={<Civicbluebackk />} />
        <Route path="/civicbluebackkk" element={<Civicbluebackkk />} />

        <Route path="/civicredback" element={<Civicredback />} />
        <Route path="/civicredbackk" element={<Civicredbackk />} />
        <Route path="/civicredbackkk" element={<Civicredbackkk />} />

        <Route path="/toyotawhitetire" element={<Toyotawhitetiree />} />
        <Route path="/toyotawhitetiree" element={<Toyotawhitetire />} />

        <Route path="/toyotabluetire" element={<Toyotabluetiree />} />
        <Route path="/toyotabluetiree" element={<Toyotabluetire />} />

        <Route path="/toyotaredtire" element={<Toyotaredtiree />} />
        <Route path="/toyotaredtiree" element={<Toyotaredtire />} />

        <Route path="/cityawhitetire" element={<Citywhitetiree />} />
        <Route path="/cityawhitetiree" element={<Citywhitetire />} />

        <Route path="/citybluetire" element={<Citybluetiree />} />
        <Route path="/citybluetiree" element={<Citybluetire />} />

        <Route path="/cityredtire" element={<Cityredtiree />} />
        <Route path="/cityredtiree" element={<Cityredtire />} />

        <Route path="/civicwhitetire" element={<Civicwhitetiree />} />
        <Route path="/civicwhitetiree" element={<Civicwhitetire />} />

        <Route path="/civicbluetire" element={<Civicbluetiree />} />
        <Route path="/civicbluetiree" element={<Civicbluetire />} />

        
        <Route path="/civicredtire" element={<Civicredtiree />} />
        <Route path="/civicredtiree" element={<Civicredtire />} />

        <Route path="/toyotawhitetiregreen" element={<Toyotawhitetiregreen />} />
        <Route path="/toyotawhitetirepurple" element={<Toyotawhitetirepurple />} />

        <Route path="/toyotabluetiregreen" element={<Toyotabluetiregreen />} />
        <Route path="/toyotabluetirepurple" element={<Toyotabluetirepurple />} />

        <Route path="/toyotaredtiregreen" element={<Toyotaredtiregreen />} />
        <Route path="/toyotaredtirepurple" element={<Toyotaredtirepurple />} />

        <Route path="/citywhitetiregreen" element={<Citywhitetiregreen />} />
        <Route path="/citywhitetirepurple" element={<Citywhitetirepurple />} />

        <Route path="/citybluetiregreen" element={<Citybluetireegreen />} />
        <Route path="/citybluetirepurple" element={<Citybluetireepurple />} />

        <Route path="/cityredtiregreen" element={<Cityredtiregreen />} />
        <Route path="/cityredtirepurple" element={<Cityredtirepurple />} />

        <Route path="/civicwhitetiregreen" element={<Civicwhitetiregreen />} />
        <Route path="/civicwhitetirepurple" element={<Civicwhitetirepurple />} />

        <Route path="/civicbluetiregreen" element={<Civicbluetiregreen />} />
        <Route path="/civicbluetirepurple" element={<Civicbluetirepurple />} />

        <Route path="/civicredtiregreen" element={<Civicredtiregreen />} />
        <Route path="/civicredtirepurple" element={<Civicredtirepurple/>} />

        <Route path="/toyotawhitegassticker" element={<Toyotawhitesticker/>} />
        <Route path="/toyotawhitegasstickerr" element={<Toyotawhitestickerr/>} />
        <Route path="//toyotawhitegasstickerrr" element={<Toyotawhitestickerrr/>} />

        <Route path="/toyotabluegassticker" element={<Toyotabluesticker/>} />
        <Route path="/toyotabluegasstickerr" element={<Toyotabluestickerr/>} />
        <Route path="/toyotabluegasstickerrr" element={<Toyotabluestickerrr/>} />

        <Route path="/toyotaredgassticker" element={<Toyotaredsticker/>} />
        <Route path="/toyotaredgasstickerr" element={<Toyotaredstickerr/>} />
        <Route path="/toyotaredgasstickerrr" element={<Toyotaredstickerrr/>} />

        <Route path="/citywhitegassticker" element={<Citywhitesticker/>} />
        <Route path="/citywhitegasstickerr" element={<Citywhitestickerr/>} />
        <Route path="/citywhitegasstickerrr" element={<Citywhitestickerrr/>} />

        <Route path="/citybluegassticker" element={<Citybluesticker/>} />
        <Route path="/citybluegasstickerr" element={<Citybluestickerr/>} />
        <Route path="/citybluegasstickerrr" element={<Citybluestickerrr/>} />

        <Route path="/cityredgassticker" element={<Cityredsticker/>} />
        <Route path="/cityredgasstickerr" element={<Cityredstickerr/>} />
        <Route path="/cityredgasstickerrr" element={<Cityredstickerrr/>} />

        <Route path="/civicwhitegassticker" element={<Civicwhitesticker/>} />
        <Route path="/civicwhitegasstickerr" element={<Civicwhitestickerr/>} />
        <Route path="/civicwhitegasstickerrr" element={<Civicwhitestickerrr/>} />

        <Route path="/civicbluegassticker" element={<Civicbluesticker/>} />
        <Route path="/civicbluegasstickerr" element={<Civicbluestickerr/>} />
        <Route path="/civicbluegasstickerrr" element={<Civicbluestickerrr/>} />

        <Route path="/civicredgassticker" element={<Civicredsticker/>} />
        <Route path="/civicredgasstickerr" element={<Civicredstickerr/>} />
        <Route path="/civicredgasstickerrr" element={<Civicredstickerrr/>} />

        <Route path="/toyotawhitesidesticker" element={<Toyotawhitesidesticker/>} />
        <Route path="/toyotawhitesidestickerr" element={<Toyotawhitesidestickerr/>} />

        <Route path="/toyotabluesidesticker" element={<Toyotabluesidesticker/>} />
        <Route path="/toyotabluesidestickerr" element={<Toyotabluesidestickerr/>} />

        <Route path="/toyotaredsidesticker" element={<Toyotaredsidesticker/>} />
        <Route path="/toyotaredsidestickerr" element={<Toyotaredsidestickerr/>} />

        <Route path="/citywhitesidesticker" element={<Citywhitesidesticker/>} />
        <Route path="/citywhitesidestickerr" element={<Citywhitesidestickerr/>} />

        <Route path="/citybluesidesticker" element={<Citybluesidesticker/>} />
        <Route path="/citybluesidestickerr" element={<Citybluesidestickerr/>} />

        <Route path="/cityredsidesticker" element={<Cityredsidesticker/>} />
        <Route path="/cityredsidestickerr" element={<Cityredsidestickerr/>} />

        <Route path="/civicwhitesidesticker" element={<Civicwhitesidesticker/>} />
        <Route path="/civicwhitesidestickerr" element={<Civicwhitesidestickerr/>} />

        <Route path="/civicbluesidesticker" element={<Civicbluesidesticker/>} />
        <Route path="/civicbluesidestickerr" element={<Civicbluesidestickerr/>} />

        <Route path="/civicredsidesticker" element={<Civicredsidesticker/>} />
        <Route path="/civicredsidestickerr" element={<Civicredsidestickerr/>} />

        
        <Route path="/toyotawhitebacksticker" element={<Toyotawhitebacksticker/>} />
        <Route path="/toyotawhitebackstickerr" element={<Toyotawhitebackstickerr/>} />
        <Route path="/toyotawhitebackstickerrr" element={<Toyotawhitebackstickerrr/>} />

        <Route path="/toyotabluebacksticker" element={<Toyotabluebacksticker/>} />
        <Route path="/toyotabluebackstickerr" element={<Toyotabluebackstickerr/>} />
        <Route path="/toyotabluebackstickerrr" element={<Toyotabluebackstickerrr/>} />

        <Route path="/toyotaredbacksticker" element={<Toyotaredbacksticker/>} />
        <Route path="/toyotaredbackstickerr" element={<Toyotaredbackstickerr/>} />
        <Route path="/toyotaredbackstickerrr" element={<Toyotaredbackstickerrr/>} />

        <Route path="/citywhitebacksticker" element={<Citywhitebacksticker/>} />
        <Route path="/citywhitebackstickerr" element={<Citywhitebackstickerr/>} />
        <Route path="/citywhitebackstickerrr" element={<Citywhitebackstickerrr/>} />

        <Route path="/citybluebacksticker" element={<Citybluebacksticker/>} />
        <Route path="/citybluebackstickerr" element={<Citybluebackstickerr/>} />
        <Route path="/citybluebackstickerrr" element={<Citybluebackstickerrr/>} />
        
        <Route path="/cityredbacksticker" element={<Cityredbacksticker/>} />
        <Route path="/cityredbackstickerr" element={<Cityredbackstickerr/>} />
        <Route path="/cityredbackstickerrr" element={<Cityredbackstickerrr/>} />
        
        <Route path="/civicwhitebacksticker" element={<Civicwhitebacksticker/>} />
        <Route path="/civicwhitebackstickerr" element={<Civicwhitebackstickerr/>} />
        <Route path="/civicwhitebackstickerrr" element={<Civicwhitebackstickerrr/>} />

        <Route path="/civicbluebacksticker" element={<Civicbluebacksticker/>} />
        <Route path="/civicbluebackstickerr" element={<Civicbluebackstickerr/>} />
        <Route path="/civicbluebackstickerrr" element={<Civicbluebackstickerrr/>} />

        <Route path="/civicredbacksticker" element={<Civicredbacksticker/>} />
        <Route path="/civicredbackstickerr" element={<Civicredbackstickerr/>} />
        <Route path="/civicredbackstickerrr" element={<Civicredbackstickerrr/>} />


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
