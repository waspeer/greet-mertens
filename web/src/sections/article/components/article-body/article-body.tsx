import PortableText from '@sanity/block-content-to-react';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import React from 'react';

import { GatsbyFigure } from '~/lib/components/gatsby-figure';
import { Player } from '~/lib/components/player';
import { generateSanityFileDownloadUrl } from '~/lib/helpers/get-sanity-file-download-url';

interface Props {
  body: any[];
}

const serializers = {
  types: {
    attachment: ({ node }: any) => {
      const { asset, name } = node;
      const fileUrl = generateSanityFileDownloadUrl(asset, name);

      return (
        <a className="article__attachment" href={fileUrl}>
          <span role="img" aria-hidden>
            📎
          </span>
          <span>{name}</span>
        </a>
      );
    },
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

      const imageData = getGatsbyImageData(
        node.asset._ref,
        { width: 850 },
        {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID!,
          dataset: process.env.GATSBY_SANITY_DATASET!,
        },
      );

      return (
        <GatsbyFigure
          image={{
            alt: node.alt,
            caption: node.caption,
            imageData,
          }}
        />
      );
    },

    player: ({ node }: any) => {
      if (!node || !node.url) {
        return null;
      }

      return <Player caption={node.caption} url={node.url} />;
    },
  },
};

export const ArticleBody = ({ body }: Props) => {
  return <PortableText blocks={body} serializers={serializers} />;
};
