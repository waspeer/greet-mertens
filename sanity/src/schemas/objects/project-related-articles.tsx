import imageUrlBuilder from '@sanity/image-url';
import client from 'part:@sanity/base/client';
import React, { useEffect, useState } from 'react';
import { RiFileMarkLine } from 'react-icons/ri';

import { ObjectType } from '../../lib/data-types';
import { getDocumentIdFromWindowLocation } from '../../lib/helpers/get-document-id-from-window-location';

interface PreviewProps {
  value: {
    category: {
      _ref: string;
    };
  };
}

interface RelatedArticle {
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
}

const RELATED_ARTICLES_QUERY = /* groq */ `
  *[ _type == "article" && categories[]._ref == $categoryId && project._ref == $projectId]
    | order(publishedAt desc)[0...3]
  {
    title,
    mainImage {
      asset { _ref }
    }
  }
`;

const imageBuilder = imageUrlBuilder(client);
const getImageUrl = (image: any) => imageBuilder.image(image.asset).height(200).width(200).url()!;

export const Preview = ({ value }: PreviewProps) => {
  const categoryId = value?.category?._ref;
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

  if (!value) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '10px' }}>
      {relatedArticles.map(({ mainImage, title }) => (
        <div key={title} style={{ display: 'flex', flexDirection: 'column' }}>
          <img alt={title} src={getImageUrl(mainImage)} />
          <strong style={{ padding: '0.25rem 0' }}>{title}</strong>
        </div>
      ))}
    </div>
  );
};

export const ProjectRelatedArticles: ObjectType = {
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
    component: Preview,
  },
};
