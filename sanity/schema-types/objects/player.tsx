import { Box, Text } from '@sanity/ui';
import { RiPlayCircleLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import { defineField, defineType } from 'sanity';

export const Player = defineType({
  name: 'player',
  type: 'object',
  title: 'Player',
  icon: RiPlayCircleLine,
  components: {
    preview(props) {
      const url = (props as any).url as string;

      return props.renderDefault({
        ...props,
        title: 'Player',
        children: url ? (
          <ReactPlayer url={url} width="100%" />
        ) : (
          <Box padding={2}>
            <Text muted align="center">
              Vul een URL in
            </Text>
          </Box>
        ),
      });
    },
  },
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Vul een link in naar SoundCloud, YouTube of Vimeo.',
      validation: (Rule) => Rule.required().error('Vul een URL in.'),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Korte beschrijving',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
});
