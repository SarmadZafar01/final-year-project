import React, { useEffect, useState } from 'react';
import './chat.css';
import ScrollToBottom from 'react-scroll-to-bottom';

function LiveChatbox({socket, username, room}) {
 const [currentMessage, setCurrentMessage]= useState(""); 
 const [messageList, setMessageList] = useState([]);
 
 const sendMessage = async () => {
  if(currentMessage !==""){
    const messageData={
      room: room,
      author: username,
      message: currentMessage,
      time: new Date(Date.now()).getHours()+":" + new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message", messageData);
    setMessageList((list)=> [...list, messageData]);
    setCurrentMessage("");
  }
 };

 useEffect(()=>{

  socket.on("receive_message",(data)=>{
    setMessageList((list)=> [...list, data]);
    
//console.log(data);
  });

 }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
      <div className="LiveHeader">
        Live Chat
        </div>
      </div>
      <div className="chat-body">
      <ScrollToBottom className="message-container">
        {messageList.map((messageContent)=>{
          return <div className="message" id={username===messageContent.author ? "you":"other"}>
          <div>
          <div className="message-content">
          <div className="MMessage" >{messageContent.message}</div>
          </div>
         
          <div className="message-meta">
          <div className="MTine" id="time">{messageContent.time}</div>
          <div className="Mauthor" id="author">{messageContent.author}</div>
          </div> 
          
          </div>
          </div>;
        })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input type="text" value={currentMessage} placeholder="hey..." onChange={(event)=>{
          setCurrentMessage(event.target.value);
        }}

onKeyPress={(event)=>{
  event.key ==="Enter" && sendMessage();
}}

         />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
      </div>
   
  );
}

export default LiveChatbox;
