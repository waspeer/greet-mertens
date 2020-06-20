import { Link } from 'gatsby';
import React from 'react';

import '~/styles/tailwind.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className="p-4 flex items-center">
        <h1 className="text-2xl m-0">Greet Mertens</h1>

        <nav className="flex flex-grow justify-end text-gray-700" style={{ marginTop: '0.125em' }}>
          <Link className="mr-4" to="/blog">
            blog
          </Link>
          <Link className="mr-4" to="/portfolio">
            portfolio
          </Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
