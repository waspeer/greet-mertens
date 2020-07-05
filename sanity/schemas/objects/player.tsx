import React from 'react';
import ReactPlayer from 'react-player';
import { RiPlayCircleLine } from 'react-icons/ri';

import type { ObjectType } from '../../lib/data-types';

const Preview = ({ value }: { value: { url: string } }) => {
  return <ReactPlayer url={value.url} />;
};

export const Player: ObjectType = {
  name: 'player',
  type: 'object',
  title: 'Player',
  icon: RiPlayCircleLine,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description:
        'Enter a url for YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, or DailyMotion',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Short description',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};
