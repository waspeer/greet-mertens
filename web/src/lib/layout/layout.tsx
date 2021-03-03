/* eslint-disable @typescript-eslint/camelcase */
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

import { getSanityOpenGraphImage } from '../helpers/get-sanity-image-open-graph-url';

import { LayoutQuery } from '~/../graphql-types';

import './layout.css';

// This import is here to satisfy the mini-css conflicting-order error
import '../components/category-badge/category-badge.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const data: LayoutQuery = useStaticQuery(graphql`
    query Layout {
      me: sanityMe(_id: { eq: "me" }) {
        portrait {
          ...TransformableImage
        }
      }

      settings: sanitySiteSettings(_id: { eq: "siteSettings" }) {
        description
      }
    }
  `);
  const { description } = data.settings!;
  const { portrait } = data.me!;

  return (
    <>
      <GatsbySeo
        description={description ?? ''}
        language="nl"
        title="Alles over"
        titleTemplate="%s - Greet Mertens"
        openGraph={{
          description: description ?? '',
          images: [getSanityOpenGraphImage(portrait, 'Greet Mertens')],
          site_name: 'Greet Mertens',
          title: 'Alles over Greet Mertens',
          type: 'website',
        }}
      />

      <header className="layout__header">
        <h1>
          <Link to="/">Greet Mertens</Link>
        </h1>

        <nav style={{}}>
          <Link to="/artikelen">artikelen</Link>
          <Link to="/projecten">projecten</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
