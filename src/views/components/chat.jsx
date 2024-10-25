import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import '../styles/chat.css';
import FooterMenu from './FooterMenu';

const socket = io('http://localhost:3000'); // Altere para o URL do seu servidor

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message'); // Limpa o listener quando o componente desmonta
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = { text: newMessage, sender: 'me' };
      setMessages((prevMessages) => [...prevMessages, message]);
      socket.emit('message', message); // Envia a mensagem para o servidor
      setNewMessage('');
    }
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <h1>Chat</h1>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.sender === 'me' ? 'sent' : 'received'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <FooterMenu />
    </>
  );
};

export default Chat;
