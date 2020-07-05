import React from 'react';
import { graphql } from 'gatsby';

import { Home } from '~/sections/home';

import { IndexPageQuery } from '~/../graphql-types';

interface Props {
  data: IndexPageQuery;
}

const IndexPage = ({ data }: Props) => {
  const portrait = data.sanityMe?.portrait?.asset?.fluid;
  const tagline = data.sanityMe?.tagline ?? '';

  return <Home portrait={portrait} tagline={tagline} />;
};

export const query = graphql`
  query IndexPage {
    sanityMe(_id: { eq: "me" }) {
      tagline
      portrait {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default IndexPage;
