import imageUrlBuilder from '@sanity/image-url';
import { useCallback, useEffect, useState } from 'react';
import { RiFileMarkLine } from 'react-icons/ri';
import { defineType, Reference, useClient } from 'sanity';

interface RelatedArticle {
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
}

const RELATED_ARTICLES_QUERY = /* groq */ `
  *[_type == "article" && references($projectId) && references($categoryId)] | order(publishedAt desc) [0...3] {
    title,
    mainImage {
      asset { _ref }
    }
  }
`;

export const ProjectRelatedArticles = defineType({
  icon: RiFileMarkLine,
  name: 'projectRelatedArticles',
  title: 'Gerelateerde Artikelen',
  type: 'object',
  fields: [
    {
      description:
        'Selecteer de categorie waarvan je de bijbehorende artikelen wilt weergeven. Alleen artikelen die bij deze categorie en dit project horen worden hier weergegeven.',
      name: 'category',
      title: 'Categorie',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      category: 'category',
    },
  },
  components: {
    preview(props) {
      const categoryRef = (props as any).category as Reference;
      const client = useClient({ apiVersion: '2022-12-13' });
      const imageBuilder = imageUrlBuilder(client);

      const getImageUrl = useCallback(
        (image: any) => imageBuilder.image(image.asset).height(200).width(200).url()!,
        [imageBuilder],
      );

      const categoryId = categoryRef?._ref;
      const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);

      useEffect(() => {
        let isMounted = true;
        const projectId = getDocumentIdFromWindowLocation();

        if (categoryId && projectId) {
          (async () => {
            const articles = await client.fetch(RELATED_ARTICLES_QUERY, { categoryId, projectId });

            if (isMounted) {
              setRelatedArticles(articles);
            }
          })();
        }

        return () => {
          isMounted = false;
        };
      }, [categoryId]);

      if (!categoryRef) return null;

      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '10px' }}>
          {relatedArticles.map(({ mainImage, title }) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column' }}>
              <img alt={title} src={getImageUrl(mainImage)} style={{ width: '100%' }} />
              <strong style={{ padding: '0.25rem 0' }}>{title}</strong>
            </div>
          ))}
        </div>
      );
    },
  },
});

export function getDocumentIdFromWindowLocation(): string | undefined {
  return (window.location.toString().match(/(?:;)(.*?)$/) || [])[1];
}
