import React, { useState } from 'react';
import './chat.css';
import LiveChatbox from './chatbox';
import io from 'socket.io-client'
import Livechatnav from './livechatnav';

const socket = io.connect("http://localhost:8080");

function Chat() {
const [username,setUsername] = useState("")
const [room, setRoom]=useState("");
const [showChat, setShaowChat]= useState(false);
const joinRoom=()=>{
  if(username !==""&& room!==""){

    socket.emit("join_room", room);
    setShaowChat(true);
  }

};
  

  return (
  
    <div className="App">
     <Livechatnav />
    {!showChat ? (
    <div className="joinChatContainer">
    <h3>Join A Chat</h3>
    <input type="text" placeholder='Jhon' onChange={(event) => {setUsername(event.target.value);}} />
    <input type="text" placeholder='Room ID...' onChange={(event) =>{setRoom(event.target.value); }} />
    <button onClick={joinRoom}>Join a Room</button>
    </div> 
    )
    : (
      <LiveChatbox socket={socket} username={username} room={room} />
      
    )}
    
    </div>
  );
}

export default Chat;
