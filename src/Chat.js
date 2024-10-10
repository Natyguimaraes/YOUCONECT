import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from the server (replace with your backend endpoint)
    axios.get('/api/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const handleSendMessage = () => {
    // Send the new message to the server (replace with your backend endpoint)
    axios.post('/api/messages', { text: newMessage })
      .then(response => {
        setMessages([...messages, response.data]);
        setNewMessage('');
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div>
      <div>
        {messages.map(message => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
