import React from 'react';
import { RiFileMarkLine } from 'react-icons/ri';
import imageUrlBuilder from '@sanity/image-url';
import client from 'part:@sanity/base/client';

import { ObjectType } from '../../lib/data-types';

interface PreviewProps {
  value?: {
    page: {
      _ref: string;
    };
  };
}

interface ImageRef {
  asset: {
    _ref: string;
  };
}

interface Page {
  title: string;
  mainImage: ImageRef;
}

const PAGE_QUERY = /* groq */ `
  *[_id == $id][0] {
    title,
    mainImage {
      asset {
        _ref,
      },
    },
  }
`;

const imageBuilder = imageUrlBuilder(client);
const getImageUrl = (image: ImageRef) =>
  imageBuilder.image(image.asset).height(75).width(75).url()!;

type State =
  | {
      state: 'empty';
      id: null;
      page: null;
    }
  | {
      state: 'loading';
      id: string;
      page: null;
    }
  | {
      state: 'loaded';
      id: string;
      page: Page;
    };

type Action = { type: 'id.set'; id?: string } | { type: 'page.loaded'; page: Page };

// eslint-disable-next-line consistent-return
const reducer: React.Reducer<State, Action> = (prev, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'id.set': {
      return action.id
        ? {
            state: 'loading',
            id: action.id!,
            page: null,
          }
        : {
            state: 'empty',
            id: null,
            page: null,
          };
    }
    case 'page.loaded': {
      return {
        id: prev.id!,
        state: 'loaded',
        page: action.page,
      };
    }
  }
};

function Preview({ value }: PreviewProps) {
  const pageId = value?.page._ref;

  const [state, send] = React.useReducer(
    reducer,
    pageId
      ? {
          state: 'loading',
          id: pageId,
          page: null,
        }
      : {
          state: 'empty',
          id: null,
          page: null,
        },
  );

  React.useEffect(() => {
    if (state.state === 'loading') {
      client
        .withConfig({ apiVersion: '2021-09-20' })
        .fetch(PAGE_QUERY, { id: state.id })
        .then((page: Page) => {
          send({ type: 'page.loaded', page });
        });
    }
  }, [state.id, state.state]);

  if (state.state === 'empty') {
    return <p style={{ padding: '0 1rem' }}>Selecteer een pagina</p>;
  }

  if (state.state === 'loading') {
    return <p style={{ padding: '0 1rem' }}>Laden...</p>;
  }

  if (state.state === 'loaded') {
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <img alt={state.page.title} src={getImageUrl(state.page.mainImage)} />
        <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{state.page.title}</p>
      </div>
    );
  }
}

export const PageLink: ObjectType<'project' | 'article'> = {
  name: 'pageLink',
  title: 'Link naar pagina',
  type: 'object',
  icon: RiFileMarkLine,
  fields: [
    {
      name: 'page',
      title: 'Pagina',
      type: 'reference',
      to: [{ type: 'project' }, { type: 'article' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      page: 'page',
    },
    component: Preview,
  },
};
