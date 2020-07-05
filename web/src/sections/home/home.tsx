import Image from 'gatsby-image';
import React from 'react';

import './home.css';

interface Props {
  portrait?: any;
  tagline: string;
}

export const Home = ({ portrait, tagline }: Props) => {
  return (
    <div className="home">
      <div className="home__portrait">
        <Image fluid={portrait} />
      </div>
      <div className="home__text">
        <h2>Greet Mertens</h2>
        <div>{tagline}</div>
      </div>
    </div>
  );
};
