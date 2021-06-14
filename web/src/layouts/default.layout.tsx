import { h } from 'preact';

import './default-layout.scss';

interface DefaultLayoutProps {
  content: string;
}

function DefaultLayout({ content }: DefaultLayoutProps) {
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

      {content}
    </div>
  );
}

module.exports = {
  render: DefaultLayout,
  data: {
    layoutCss: 'styles/default.layout.css',
    layout: 'base.11ty.js',
  },
};
