import React, { useState } from 'react';
import { Contact, ContactListProps } from '../../types';
import ReactModal from 'react-modal';
import { contactData } from '../../data';
import plus from '../../assets/plus.svg';
import close from '../../assets/close.svg';
import ChatItem from '../ChatItem/ChatItem';
import './ContactList.scss';

const ContactList: React.FC<ContactListProps> = ({ chats, setChats, setSelectedChat }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleContactClick = (contact: Contact) => {
    let chat = chats.find((chat) => chat.contactId === contact.id);

    if (!chat) {
      chat = {
        id: Date.now(),
        contactId: contact.id,
        messages: [
          {
            id: Date.now(),
            text: 'Hello!',
            sender: 'other',
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
      setChats((prevChats) => {
        return [...prevChats, chat];
      });
    }

    setSelectedChat(chat);
    closeModal();
  };

  const modalContent = (
    <div className="contact-list__modal-content">
      <div className="contact-list__modal-header">
        <h2 className="contact-list__modal-title">Choose contact</h2>
        <button className="contact-list__modal-close" onClick={closeModal}>
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="contact-list__modal-body">
        {contactData.map((contact) => {
          return (
            <div key={contact.id} onClick={() => handleContactClick(contact)}>
              <ChatItem user={contact} />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="contact-list">
      <button className="contact-list__button" onClick={openModal}>
        <img src={plus} alt="plus" />
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="contact-list__modal"
        overlayClassName="contact-list__overlay"
      >
        {modalContent}
      </ReactModal>
    </div>
  );
};

export default ContactList;
