import React from 'react';
import { ChatHistoryProps } from '../../types';
import ContactInfo from '../ContactInfo/ContactInfo';
import { contactData } from '../../data';
import './ChatHistory.scss';

const ChatHistory: React.FC<ChatHistoryProps> = ({ chat }) => {
  const contact = contactData.find((contact) => contact.id === chat.contactId);

  return (
    <div className="chat-history">
      {contact && (
        <div className="contact-info-mobile">
          <ContactInfo user={contact} isSidebar={true} />
        </div>
      )}
      {chat.messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'self' ? 'sent' : 'received'}`}
        >
          <div>{message.text}</div>
          <div>{message.time}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
