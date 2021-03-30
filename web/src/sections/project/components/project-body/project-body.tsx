import PortableText from '@sanity/block-content-to-react';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import React from 'react';

import { GatsbyFigure } from '~/lib/components/gatsby-figure';
import { Player } from '~/lib/components/player';
import { ArticlePreview } from '~/lib/types';

import { RelatedArticleSlider } from '../related-article-slider';

interface Props {
  body: any[];
  relatedArticlePreviews: (ArticlePreview & { categories: { _id: string }[] })[];
}

export const ProjectBody = ({ body, relatedArticlePreviews }: Props) => {
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

      projectRelatedArticles: ({ node }: any) => {
        if (!node || !node.category) {
          return null;
        }

        const categoryId = node?.category?._ref;
        const articlePreviews = relatedArticlePreviews.filter(({ categories }) =>
          categories.some(({ _id }) => _id === categoryId),
        );

        return articlePreviews.length ? (
          <RelatedArticleSlider articlePreviews={articlePreviews} />
        ) : null;
      },
    },
  };

  return <PortableText blocks={body} serializers={serializers} />;
};
