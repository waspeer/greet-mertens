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
        'Vul een link in naar YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, of DailyMotion',
      validation: (Rule) => Rule.required().error('Vul een URL in.'),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Korte beschrijving',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};
