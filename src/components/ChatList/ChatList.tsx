import React from 'react';
import ChatItem from '../ChatItem/ChatItem';
import { contactData } from '../../data';
import { ChatListProps, Message } from '../../types';
import './ChatList.scss';

const ChatList: React.FC<ChatListProps> = ({ chats, setSelectedChat, selectedChat }) => {
  const getLastMessage = (messages: Message[]) => {
    return messages[messages.length - 1];
  };

  return (
    <div className="chat-list">
      {chats.map((chat) => {
        const contact = contactData.find((contact) => contact.id === chat.contactId);
        const lastMessage = getLastMessage(chat.messages);
        if (!contact) return null;

        const isActive = selectedChat && selectedChat.id === chat.id;

        return (
          <div
            key={chat.id}
            className={`chat-list__item ${isActive ? 'chat-list__item--active' : ''}`}
            onClick={() => setSelectedChat(chat)}
          >
            <ChatItem user={contact} message={lastMessage} />
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
