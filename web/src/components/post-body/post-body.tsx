import PortableText from "@sanity/block-content-to-react";
import * as React from "react";
import { format } from "date-fns";
import locale from "date-fns/locale/nl";

// import { CaptionedMedia } from '~/lib/components/captioned-media';
// import { Player } from '~/lib/components/player';
import { sanityImageUrlBuilder } from "../../lib/helpers/sanity-image-url-builder";
import { generateSanityFileDownloadUrl } from "../../lib/helpers/get-sanity-file-download-url";
// import { ArticlePreview } from '../lib/types';
import { getArticleUrl } from "../../lib/helpers/get-article-url";
import { getProjectUrl } from "../../lib/helpers/get-project-url";
import { Image } from "../image/image";
import { ImageData } from "../../lib/types";
import styles from "./post-body.module.scss";

// import { RelatedArticleSlider } from '../related-article-slider';

interface PageReference {
  type: "project" | "article";
  mainImage: ImageData;
  page: any;
  publishedAt: string;
  slug: string;
  title: string;
}

interface Props {
  body: any[];
  // relatedArticlePreviews: (any & { categories: { _id: string }[] })[];
}

export function PageLink({
  type,
  publishedAt,
  mainImage,
  slug,
  title,
}: PageReference) {
  const url =
    type === "article"
      ? getArticleUrl({ slug, publishedAt })
      : getProjectUrl({ slug });
  const typeLocale = type === "article" ? "artikel" : "project";
  const formattedDate = publishedAt
    ? format(
        new Date(publishedAt),
        type === "article" ? "d MMMM yyyy" : " MMMM yyyy",
        { locale }
      )
    : null;

  return (
    <article
      className={`[ ${styles.pagelink} ] [ br-md bs-md click-area p-200 ]`}
    >
      <Image {...mainImage} aspectRatio={1.5} caption={null} width={160} />

      <section className="[ lh-tight ]">
        <a href={url}>{title}</a>
        <div className="[ fs-300 tc-gray-500 ]">
          {typeLocale}
          {publishedAt && " - "}
          {publishedAt && <time dateTime={publishedAt}>{formattedDate}</time>}
        </div>
      </section>
    </article>
  );
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

      figure: ({ node }: { node: ImageData }) => {
        if (!node || !node.asset) {
          return null;
        }

        return <Image {...node} maxWidth="60ch" />;
      },

      pageLink: ({ node }: { node: PageReference }) => {
        return <PageLink {...node} />;
      },

      player: ({ node }: any) => {
        if (!node || !node.url) {
          return null;
        }

        return <h1>PLAYER</h1>;

        // return <Player caption={node.caption} url={node.url} />;
      },

      projectRelatedArticles: ({
        node,
      }: {
        node: { pages: PageReference[] };
      }) => {
        if (!node || !node.pages) {
          return null;
        }

        return node.pages.map((page) => <PageLink {...page} />);
      },
    },
  };

  return <PortableText blocks={body} serializers={serializers} />;
}
