import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <header>
        <a className="layout__siteTitle" href="/">
          Greet Mertens
        </a>

        <nav>
          <ul>
            <li>
              <a href="/artikelen">artikelen</a>
            </li>
            <li>
              <a href="/projecten">projecten</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}

export default Layout;
