import React from 'react';
import classNames from '@sindresorhus/class-names';
import ReactPlayer from 'react-player';

import './player.css';
import { CaptionedMedia } from '~/lib/components/captioned-media';

interface Props {
  caption?: string | null;
  className?: string;
  url: string;
}

export const Player = ({ caption, className, url }: Props) => {
  const media = <ReactPlayer light url={url} width="100%" />;

  return (
    <CaptionedMedia caption={caption} className={classNames('player', className)} media={media} />
  );
};
