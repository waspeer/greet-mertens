import React from 'react';
import { RiPlayCircleLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import { defineType } from 'sanity';

export const Player = defineType({
  name: 'player',
  type: 'object',
  title: 'Player',
  icon: RiPlayCircleLine,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Vul een link in naar SoundCloud, YouTube of Vimeo.',
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
  },
  components: {
    preview(props) {
      const url = (props as any).url as string;
      return <ReactPlayer url={url} width="100%" />;
    },
  },
});
