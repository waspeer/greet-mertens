import { Link } from 'gatsby';
import React from 'react';

import type { Category as CategoryType } from '~/lib/types';

import './category.css';

interface Props {
  category: CategoryType;
}

export const Category = ({ category }: Props) => {
  const { color, description, icon, slug, title } = category;
  const iconElement = icon && (
    <span className="category__icon" role="img" aria-label={icon.description}>
      {icon.icon}
    </span>
  );

  return (
    <Link to={`/blog/categories/${slug}`}>
      <h2 className="category__title">
        {iconElement}
        {title}
        <span className="category__arrow">»</span>
      </h2>
      <div className="category__color" style={{ backgroundColor: color || 'whitesmoke' }} />
      <p className="category__description">{description}</p>
    </Link>
  );
};
