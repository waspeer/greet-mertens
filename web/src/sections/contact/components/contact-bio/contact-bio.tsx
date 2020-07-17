import PortableText from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import React from 'react';

import { GatsbyFigure } from '~/lib/components/gatsby-figure';

interface Props {
  bio: any[];
  className?: string;
}

const serializers = {
  types: {
    figure: ({ node }: any) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null;
      }

      const fluid = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 850 },
        {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        },
      );

      return (
        <GatsbyFigure
          image={{
            alt: node.alt,
            caption: node.caption,
            fluid,
          }}
        />
      );
    },
  },
};

export const ContactBio = ({ bio, className }: Props) => {
  return (
    <div className={className}>
      <PortableText blocks={bio} serializers={serializers} />
    </div>
  );
};
