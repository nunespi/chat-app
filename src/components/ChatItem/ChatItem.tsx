import React from 'react';
import { ChatItemProps } from '../../types';
import './ChatItem.scss';

const ChatItem: React.FC<ChatItemProps> = ({ user, message }) => {
  return (
    <div className="chat-item">
      <div className="chat-item__avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="chat-item__content">
        <div className="chat-item__content-name">{user.name}</div>
        <div className="chat-item__content-message">{message?.text}</div>
        <div className="chat-item__content-time">{message?.time}</div>
      </div>
    </div>
  );
};

export default ChatItem;
