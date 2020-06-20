import React from 'react';

import { Category as CategoryType } from '#lib/types';
import { getContrast } from '#lib/helpers/get-contrast';

import './categories.css';

interface Props {
  categories: CategoryType[];
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <ul className="blogPost__categories">
      {categories.map(({ color, icon, id, title }) => (
        <li
          key={id}
          style={{
            backgroundColor: color || 'f5f5f5',
            color: getContrast(color || 'f5f5f5'),
          }}
        >
          {icon && <span>{icon}</span>}
          {title}
        </li>
      ))}
    </ul>
  );
};
