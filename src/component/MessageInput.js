import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import './MessageInput.css';

const MessageInput = ({ addMessage }) => {
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim() !== '') {
      addMessage({ text, type: 'text' });
      setText('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMessage}>
        <IoIosSend />
      </button>
    </div>
  );
};

export default MessageInput;
