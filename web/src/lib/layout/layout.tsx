/* eslint-disable @typescript-eslint/camelcase */
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

import '~/styles/tailwind.css';
import './layout.css';
import { sanityImageUrlBuilder } from '../helpers/sanity-image-url-builder';
import { getSanityOpenGraphImage } from '../helpers/get-sanity-image-open-graph-url';

import { LayoutQuery } from '~/../graphql-types';

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

export const query = graphql`
  fragment TransformableImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  fragment TransformableFigure on SanityFigure {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
`;

export default Layout;
