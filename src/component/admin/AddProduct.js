import React, { useState } from 'react'
import Adminsiderbar3 from '../admin/adminsidebad3';
import Adminsearchbar from '../admin/adminsearchbar'
import "../admin/Adminproduct.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImagetoBase64 } from '../../utliity/imagetonase64';
import toast from 'react-hot-toast';
import "../admin/addproduct.css";

const AddProduct =() =>{

    const [data, setData] = useState({
        name:"",
        price:"",
        category: "",
        description:"",
        image:""


    })

    const handleOnchange =(e)=>{
        const{name,value}=e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }
    
    

    const uploadImage = async (e) => {
        const imageData = await ImagetoBase64(e.target.files[0]);
    
        setData((prevData) => {
            return {
                ...prevData,
                image: imageData,
            };
        });
    };

const handlesubmit= async (e)=>{
    e.preventDefault();
    console.log(data)

    const {name,price,category,image}= data

    if(name && price && category && image){
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadproduct`,{
            method : "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
    

    const fetchRes = await fetchData.json()
    console.log(fetchRes)
    toast(fetchRes.message)

    setData(()=>{
        return{
            name:"",
            price:"",
            category: "",
            description:"",
            image:""
        }
    })
    }
    else{
        toast("Enter Require Fields")
    }

}

  return (
    <div>
      <Adminsiderbar3 />
      <Adminsearchbar />
      <div className="NewProduct">Add Product</div>
      <div className="Card">
        <form onSubmit={handlesubmit}>
            <label className="P112">Name</label>
            <input type="text" placeholder="Type here" name="name" onChange={handleOnchange} value={data.name}></input>

            <div className="Pricess">
            <label className="p113">Prices</label>
            <input type="text" placeholder="Type here" name="price" onChange={handleOnchange} value={data.price}></input>
            </div>

            
            <label className="p117">Category</label>
            <select className="P115" name="category" onChange={handleOnchange} value={data.category}>
            <option value={"other"}>Select Category</option>
                <option value="Gear stick">Gear stick</option>
                <option value="Dashbord">Dashbord</option>
                <option value="Air intake">Air intake</option>
                <option value="Fog light">Fog light</option>
                <option value="Headlight">Headlight</option>
                <option value="Tail light">Tail light</option>
                <option value="Console"> Console</option>
                <option value="Steering Wheel">     Steering Wheel</option>
            </select>
            <div className="describe">
            <label className="p114">Description</label>
            <input type="text" placeholder="Type Here" name="description" onChange={handleOnchange} value={data.description}></input>
            </div>


            <div className="Look">
            <label className="image" htmlFor='image'>Image
            <div className="UMPER">
            {
                data.image ? <img src={data.image} alt=""/> :  <span className="ICONN"><FaCloudUploadAlt /></span>
            }
            
            <input type="file" id="image" onChange={uploadImage} accept="image/*"></input>
            </div>
            </label>
            
            </div>

            <div className="B110">
                <button>Publish</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default AddProduct