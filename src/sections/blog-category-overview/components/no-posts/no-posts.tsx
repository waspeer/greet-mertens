import React from 'react';

import './no-posts.css';
import classNames from '@sindresorhus/class-names';

interface Props {
  className?: string;
}

export const NoPosts = ({ className }: Props) => {
  return (
    <div className={classNames('noPosts', className)}>
      Er zijn nog geen artikelen in deze categorie.
    </div>
  );
};
