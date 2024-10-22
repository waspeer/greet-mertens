import imageUrlBuilder from '@sanity/image-url';
import { Box, Text } from '@sanity/ui';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { RiFileMarkedLine } from 'react-icons/ri';
import { defineField, defineType, useClient, useFormValue } from 'sanity';

interface RelatedArticle {
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
}

interface PreviewProps {
  categoryId: string;
}

export const Preview = ({ categoryId }: PreviewProps) => {
  const client = useClient({ apiVersion: '2024-02-24' });
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);
  const projectId = useFormValue(['_id']) as string;

  const imageBuilder = useMemo(() => imageUrlBuilder(client), [client]);
  const getImageUrl = useCallback(
    (image: any) => {
      return imageBuilder.image(image.asset).height(200).width(200).url()!;
    },
    [imageBuilder],
  );

  useEffect(() => {
    let isMounted = true;

    if (categoryId && projectId) {
      (async () => {
        const articles = await client.fetch(
          /* groq */ `
            *[ _type == "article" && $categoryId in categories[]._ref && project._ref == $projectId]
              | order(publishedAt desc)[0...3]
            {
              title,
              mainImage {
                asset { _ref }
              }
            }
          `,
          { categoryId, projectId: projectId.replace('drafts.', '') },
        );

        if (isMounted) {
          setRelatedArticles(articles);
        }
      })();
    }

    return () => {
      isMounted = false;
    };
  }, [categoryId, client, projectId]);

  return relatedArticles.length ? (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '10px' }}>
      {relatedArticles.map(({ mainImage, title }) => (
        <div key={title} style={{ display: 'flex', flexDirection: 'column' }}>
          <img alt={title} style={{ width: '100%' }} src={getImageUrl(mainImage)} />
          <strong style={{ padding: '0.25rem 0' }}>{title}</strong>
        </div>
      ))}
    </div>
  ) : (
    <Box padding={3}>
      <Text muted align="center" size={1}>
        Geen gerelateerde artikelen gevonden
      </Text>
    </Box>
  );
};

export const ProjectRelatedArticles = defineType({
  icon: RiFileMarkedLine,
  name: 'projectRelatedArticles',
  title: 'Gerelateerde Artikelen',
  type: 'object',
  preview: {
    select: {
      category: 'category',
    },
  },
  components: {
    preview(props) {
      const category = (props as any).category as { _ref: string } | undefined;

      return props.renderDefault({
        ...props,
        title: 'Gerelateerde Artikelen',
        children: category ? (
          <Preview categoryId={category._ref} />
        ) : (
          <Box padding={3}>
            <Text muted align="center" size={1}>
              Vul een categorie in
            </Text>
          </Box>
        ),
      });
    },
  },
  fields: [
    defineField({
      description:
        'Selecteer de categorie waarvan je de bijbehorende artikelen wilt weergeven. Alleen artikelen die bij deze categorie en dit project horen worden hier weergegeven.',
      name: 'category',
      title: 'Categorie',
      type: 'reference',
      to: [{ type: 'category' as const }],
    }),
  ],
});
