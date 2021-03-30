import { graphql } from 'gatsby';
import React from 'react';

import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';
import { Home } from '~/sections/home';

import { IndexPageQuery } from '~/../graphql-types';

interface Props {
  data: IndexPageQuery;
}

const IndexPage = ({ data }: Props) => {
  const email = data.me?.email ?? '';
  const portrait = data.me?.portrait?.asset?.gatsbyImageData;
  const tagline = data.me?.tagline ?? '';
  const projectHighlights = data.highlights?.projects?.map((projectPreview) =>
    normalizeProjectPreview(projectPreview!),
  );

  return (
    <Home
      email={email}
      portrait={portrait}
      projectHighlights={projectHighlights}
      tagline={tagline}
    />
  );
};

export const query = graphql`
  query IndexPage {
    me: sanityMe(_id: { eq: "me" }) {
      email
      tagline
      portrait {
        asset {
          gatsbyImageData(width: 1000)
        }
      }
    }

    highlights: sanityHighlights(_id: { eq: "highlights" }) {
      projects {
        ...ProjectPreview
      }
    }
  }
`;

export default IndexPage;
