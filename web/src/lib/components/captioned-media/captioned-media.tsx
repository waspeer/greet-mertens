import React from 'react';
import classNames from '@sindresorhus/class-names';

import './captioned-media.css';

interface Props {
  caption?: string | null;
  className?: string;
  media: React.ReactNode;
}

export const CaptionedMedia = ({ caption, className, media }: Props) => {
  return (
    <div className={classNames('captionedMedia', className)}>
      <div className="captionedMedia__media">{media}</div>
      {caption && <div className="captionedMedia__caption">{caption}</div>}
    </div>
  );
};
