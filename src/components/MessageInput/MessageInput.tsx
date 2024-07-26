import React, { useState } from 'react';
import { MessageInputProps } from '../../types';
import './MessageInput.scss';
import sendIcon from '../../assets/send-icon.svg'; // Импорт иконки отправки

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'self',
        time: new Date().toLocaleTimeString(),
      };
      onSendMessage(message);
      setNewMessage('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        className="message-input__input"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write message..."
      />
      <button className="message-input__button" onClick={handleSendMessage}>
        <img src={sendIcon} alt="Send" />
      </button>
    </div>
  );
};

export default MessageInput;
