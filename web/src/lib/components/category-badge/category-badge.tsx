import classNames from '@sindresorhus/class-names';
import React from 'react';

import { getContrast } from '~/lib/helpers/get-contrast';
import { Category } from '~/lib/types';
import './category-badge.css';

interface Props {
  category: Pick<Category, 'color' | 'icon' | 'title'>;
  className?: string;
}

export const CategoryBadge = ({ category, className }: Props) => {
  const { color, icon, title } = category;

  return (
    <div
      className={classNames('categoryBadge', className)}
      style={{
        backgroundColor: color || '#f5f5f5',
        color: getContrast(color || '#f5f5f5'),
      }}
    >
      {icon && (
        <span role="img" aria-label={icon.description}>
          {icon.icon}
        </span>
      )}
      {title}
    </div>
  );
};
