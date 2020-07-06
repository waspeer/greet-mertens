import { Link } from 'gatsby';
import React from 'react';

import '~/styles/tailwind.css';
import './layout.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className="layout__header">
        <h1>
          <Link to="/">Greet Mertens</Link>
        </h1>

        <nav style={{}}>
          <Link to="/artikelen">artikelen</Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
