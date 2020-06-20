import PortableText from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import React from 'react';

import { Figure } from '../figure';

interface Props {
  body: any[];
}

const serializers = {
  types: {
    block: (props: any) => {
      const { children, node } = props;
      const style = node.style || 'normal';

      if (style === 'heading') {
        return <h2>{children}</h2>;
      }

      if (style === 'subheading') {
        return <h3>{children}</h3>;
      }

      return PortableText.defaultSerializers.types.block(props);
    },

    figure: ({ node }: any) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null;
      }

      const fluid = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidht: 850 },
        {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        },
      );

      return (
        <Figure
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

export const BlogPostBody = ({ body }: Props) => {
  return <PortableText blocks={body} serializers={serializers} />;
};
