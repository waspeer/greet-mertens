import React from 'react';
import { Link } from 'gatsby';

import './contact.css';

interface Props {
  email: string;
}

const Contact = ({ email }: Props) => {
  return (
    <div className="container">
      <div>
        Heb je ideeën voor een leuk project? Of wil je iets anders met mij bespreken? Stuur me een
        berichtje!
      </div>
      <Link className="contact__email" to={`mailto:${email}`}>
        {email}
      </Link>
    </div>
  );
};

export default Contact;
