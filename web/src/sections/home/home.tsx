import Image from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';

import './home.css';

interface Props {
  email: string;
  portrait?: any;
  tagline: string;
}

export const Home = ({ email, portrait, tagline }: Props) => {
  return (
    <div className="home">
      <div className="home__portrait">
        <Image fluid={portrait} />
      </div>
      <div className="home__text">
        <h2>Greet Mertens</h2>
        <div>{tagline}</div>
        <Link className="home__email" to={`mailto:${email}`}>
          {email}
        </Link>
      </div>
    </div>
  );
};
