import React from 'react';

import { Category as CategoryType } from '~/lib/types';

import { Category } from './components';
import './blog-category-overview.css';

interface Props {
  categories: CategoryType[];
}

export const BlogCategoryOverview = ({ categories }: Props) => {
  return (
    <div className="blogCategoryOverview container">
      <ul className="blogCategoryOverview__list">
        {categories.map((category) => (
          <li key={category.id}>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};
