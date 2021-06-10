import PortableText from '@sanity/block-content-to-react';
import React from 'react';

import { CaptionedMedia } from '~/lib/components/captioned-media';
import { Player } from '~/lib/components/player';
import { sanityImageUrlBuilder } from '~/lib/helpers/sanity-image-url-builder';
import { generateSanityFileDownloadUrl } from '~/lib/helpers/get-sanity-file-download-url';
import { ArticlePreview } from '~/lib/types';

import { RelatedArticleSlider } from '../related-article-slider';

interface Props {
  body: any[];
  relatedArticlePreviews: (ArticlePreview & { categories: { _id: string }[] })[];
}

export const ProjectBody = ({ body, relatedArticlePreviews }: Props) => {
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

        const imageUrl = sanityImageUrlBuilder(node).url();

        if (!imageUrl) return null;

        return (
          <CaptionedMedia
            caption={node.caption}
            className="figure"
            media={<img alt={node.alt} src={imageUrl} />}
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
