import { Link } from 'gatsby';
import React from 'react';

import type { Category as CategoryType } from '~/lib/types';
import { getContrast } from '~/lib/helpers/get-contrast';
import { getCategoryUrl } from '~/lib/helpers/get-category-url';

import './categories.css';

interface Props {
  categories: CategoryType[];
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <ul className="blogPost__categories">
      {categories.map(({ color, icon, id, slug, title }) => (
        <li
          key={id}
          style={{
            backgroundColor: color || '#f5f5f5',
            color: getContrast(color || '#f5f5f5'),
          }}
        >
          <Link to={getCategoryUrl({ namespace: 'blog', slug })}>
            {icon && (
              <span role="img" aria-label={icon.description}>
                {icon.icon}
              </span>
            )}
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
