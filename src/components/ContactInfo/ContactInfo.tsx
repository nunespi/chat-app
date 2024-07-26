import React from 'react';
import { ContactInfoProps } from '../../types';
import phone from '../../assets/phone-call.svg';
import heart from '../../assets/heart.svg';
import video from '../../assets/video-camera-alt.svg';
import './ContactInfo.scss';

const ContactInfo: React.FC<ContactInfoProps & { isSidebar?: boolean }> = ({ user, isSidebar }) => {
  return (
    <div className={`contact-info ${isSidebar ? 'contact-info--sidebar' : 'contact-info--main'}`}>
      <div className="contact-info__details">
        <img className="contact-info__avatar" src={user.avatar} alt="photo" />
        <div className="contact-info__name">{user.name}</div>
      </div>
      <div className="contact-info__actions">
        <img className="contact-info__actions__icon" src={phone} alt="phone" />
        <img className="contact-info__actions__icon" src={heart} alt="heart" />
        <img className="contact-info__actions__icon" src={video} alt="video" />
      </div>
    </div>
  );
};

export default ContactInfo;
