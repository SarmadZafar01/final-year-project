import React from 'react';
import { useNavigate } from 'react-router-dom';
import Adminsearchbar from '../admin/adminsearchbar';
import "../admin/AdminLiveChat.css";
import "../admin/adminsidebar3.css";
import Adminsiderbar3 from '../admin/adminsidebad3';



const AdminLiveChat = () => {
  const navigate = useNavigate();
  const handlechatclick=()=>{
    navigate(`/chat`);
  }



  return (
    <div>
      <Adminsiderbar3 />
      <Adminsearchbar />
<div className="box25" onClick={handlechatclick}>
<div className="Chat-name"></div>
<div className="Chat-name1"></div>
<div className="Chat-name2"></div>
<div className="Chat-name3"></div>
<div className="Chat-name4"></div>
<div className="Chat-name5"></div>
<div className="Chat-name6"></div>
<div className="Chat-name7"></div>
<div className="Chat-name8"></div>
<div className="Chat-name9"></div>


      
      </div>
    </div>
  );
}

export default AdminLiveChat;
