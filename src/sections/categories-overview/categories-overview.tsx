import { Link } from 'gatsby';
import React from 'react';

import type { Category as CategoryType } from '~/lib/types';
import { getCategoryUrl } from '~/lib/helpers/get-category-url';

import { CategoryInfo } from './components';

import './categories-overview.css';

interface Props {
  categories: CategoryType[];
}

export const CategoriesOverview = ({ categories }: Props) => {
  return (
    <div className="container">
      <ul className="categoriesOverview__list focussedList">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={getCategoryUrl(category)}>
              <CategoryInfo category={category} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
