import React, { useState } from 'react';
import { chatData, contactData } from './data';
import './App.scss';
import ChatList from './components/ChatList/ChatList';
import { Chat, Message } from './types';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ContactList from './components/ContactList/ContactList';
import MessageInput from './components/MessageInput/MessageInput';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  const [chats, setChats] = useState<Chat[]>(chatData);
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0]);

  const addMessageToChat = (message: Message) => {
    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat?.id ? { ...chat, messages: [...chat.messages, message] } : chat
    );

    const sortedChats = [
      ...updatedChats.filter((chat) => chat.id === selectedChat.id),
      ...updatedChats.filter((chat) => chat.id !== selectedChat.id),
    ];

    setChats(sortedChats);

    setSelectedChat((prevChat) => {
      if (prevChat) {
        return {
          ...prevChat,
          messages: [...prevChat.messages, message],
        };
      }
      return null;
    });
  };

  const selectedContact = contactData.find((contact) => contact.id === selectedChat?.contactId);

  return (
    <div className="app">
      <div className="app__sidebar">
        <ContactList
          contacts={contactData}
          chats={chats}
          setChats={setChats}
          setSelectedChat={setSelectedChat}
        />
        <ChatList chats={chats} setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
      </div>
      <div className="app__main-content">
        {selectedChat && (
          <>
            <ChatHistory chat={selectedChat} />
            <MessageInput onSendMessage={addMessageToChat} />
          </>
        )}
      </div>
      {selectedContact && (
        <div className="app__contact-info">
          <ContactInfo user={selectedContact} isSidebar={false} />
        </div>
      )}
    </div>
  );
}

export default App;
