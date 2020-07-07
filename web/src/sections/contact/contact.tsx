import PortableText from '@sanity/block-content-to-react';
import React from 'react';

import { ContactBio } from './components/contact-bio';
import './contact.css';

interface Props {
  bio?: any;
  email: string;
  phone: string;
}

const Contact = ({ bio, email, phone }: Props) => {
  return (
    <div className="contact container">
      <ContactBio bio={bio} className="contact__bio" />
      <a className="contact__email" href={`mailto:${email}`}>
        {email}
      </a>
      <a className="contact__phone" href={`tel:${phone}`}>
        {phone}
      </a>
    </div>
  );
};

export default Contact;
