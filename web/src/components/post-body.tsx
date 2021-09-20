import PortableText from "@sanity/block-content-to-react";
import * as React from "react";

// import { CaptionedMedia } from '~/lib/components/captioned-media';
// import { Player } from '~/lib/components/player';
import { sanityImageUrlBuilder } from "../lib/helpers/sanity-image-url-builder";
import { generateSanityFileDownloadUrl } from "../lib/helpers/get-sanity-file-download-url";
// import { ArticlePreview } from '../lib/types';
import { getArticleUrl } from "../lib/helpers/get-article-url";
import { getProjectUrl } from "../lib/helpers/get-project-url";

// import { RelatedArticleSlider } from '../related-article-slider';

interface PageReference {
  id: string;
  type: "project" | "article";
  publishedAt: string;
  slug: string;
}

interface Props {
  body: any[];
  // relatedArticlePreviews: (any & { categories: { _id: string }[] })[];
}

export function PostBody({ body }: Props) {
  const serializers = {
    container: (props: any) => <>{props.children}</>,

    marks: {
      internalLink: (props) => {
        const reference = props.mark;
        const url =
          reference.type === "article"
            ? getArticleUrl(reference)
            : getProjectUrl(reference);

        return <a href={url}>{props.children}</a>;
      },
    },

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
        const style = node.style || "normal";

        if (style === "heading") {
          return <h2>{children}</h2>;
        }

        if (style === "subheading") {
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

        return <h1>IMAGE</h1>;

        // return (
        //   <CaptionedMedia
        //     caption={node.caption}
        //     className="figure"
        //     media={<img alt={node.alt} src={imageUrl} />}
        //   />
        // );
      },

      pageLink: ({ node }) => {
        const url =
          node.type === "article" ? getArticleUrl(node) : getProjectUrl(node);

        return (
          <article>
            <a href={url}>{node.title}</a>
          </article>
        );
      },

      player: ({ node }: any) => {
        if (!node || !node.url) {
          return null;
        }

        return <h1>PLAYER</h1>;

        // return <Player caption={node.caption} url={node.url} />;
      },

      projectRelatedArticles: ({ node }: any) => {
        if (!node || !node.category) {
          return null;
        }

        // const categoryId = node?.category?._ref;
        // const articlePreviews = relatedArticlePreviews.filter(({ categories }) => categories.some(({ _id }) => _id === categoryId)
        // );

        return <h1>RELATED ARTICLES</h1>;

        // return articlePreviews.length ? (
        //   <RelatedArticleSlider articlePreviews={articlePreviews} />
        // ) : null;
      },
    },
  };

  return <PortableText blocks={body} serializers={serializers} />;
}
