import { defineType } from 'sanity';
import { SearchIcon } from '@sanity/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Label,
  Popover,
  Stack,
  Text,
  useClickOutside,
  ThemeProvider,
  studioTheme,
  useTheme,
} from '@sanity/ui';
import emojiData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import React, { useCallback, useEffect, useState } from 'react';
import { ObjectInputProps, set, unset } from 'sanity';

const allowedFields = [
  'id',
  'name',
  'colons',
  'short_names',
  'unified',
  'native',
  'imageUrl',
  'keywords',
  'customCategory',
  'skin',
  'emoticons',
  'text',
];

const EmojiPickerInput = React.forwardRef(
  (props: ObjectInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { value, members, renderField, renderInput, renderItem, schemaType, readOnly, onChange } =
      props;

    const { options } = schemaType;

    const [open, setOpen] = useState<boolean>(false);
    const [selectedEmoji, setSelectedEmoji] = useState<Record<string, string | string[]>>();

    // This will launch only if propName value has changed.
    useEffect(() => {
      setSelectedEmoji(value);
    }, [value]);

    const handlePickerOpen = () => {
      setOpen(true);
    };
    const handlePickerClose = () => {
      setOpen(false);
    };

    const handleSelect = (emoji: any) => {
      setSelectedEmoji(emoji);
      const newKeys = Object.keys(emoji);
      const patches = allowedFields
        .map((key) => {
          if (newKeys.includes(key)) {
            if (emoji[key] || emoji[key]?.length !== 0) {
              return set(emoji[key], [key]);
            }
          }

          if (selectedEmoji) {
            return unset([key]);
          }
        })
        .filter(Boolean);
      // Unset and set new fields
      onChange(patches as any);
      // Close emoji picker
      handlePickerClose();
    };

    const [pickerRef, setPickerRef] = useState(null);

    const handleClickOutside = useCallback(() => {
      setOpen(false);
    }, []);

    useClickOutside(handleClickOutside, [pickerRef]);

    const meta = [
      { label: 'ID', value: selectedEmoji?.id },
      { label: 'Unified', value: selectedEmoji?.unified },
      { label: 'Name', value: selectedEmoji?.name },
      { label: 'Colons', value: selectedEmoji?.colons },
    ];

    return (
      <ThemeProvider theme={studioTheme}>
        <Stack space={2}>
          <Flex align="flex-start">
            <Popover
              open={open}
              content={
                <Box ref={setPickerRef}>
                  <Picker {...options?.picker} data={emojiData} onEmojiSelect={handleSelect} />
                </Box>
              }
            >
              <Button
                text={selectedEmoji ? undefined : 'Select emoji'}
                icon={selectedEmoji ? undefined : SearchIcon}
                mode="ghost"
                paddingY={3}
                paddingX={4}
                onClick={open ? handlePickerClose : handlePickerOpen}
                ref={ref}
                // onFocus={onFocus}
                // onBlur={onBlur}
                readOnly={readOnly}
              >
                {selectedEmoji && <span style={{ fontSize: '2em' }}>{selectedEmoji.native}</span>}
              </Button>
            </Popover>
            {!options?.hideSummary && (
              <Grid
                flex={1}
                gap={3}
                columns={2}
                paddingLeft={2}
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                }}
              >
                {selectedEmoji &&
                  meta.map(
                    (m) =>
                      m.value && (
                        <Stack space={2} padding={1} marginLeft={2}>
                          <Label size={1} muted>
                            {m.label}
                          </Label>
                          <Text size={1}>{m.value}</Text>
                        </Stack>
                      ),
                  )}
              </Grid>
            )}
          </Flex>
        </Stack>
      </ThemeProvider>
    );
  },
);

export const EmojiPicker = defineType({
  name: 'emoji',
  title: 'Emoji',
  type: 'object',
  components: {
    input: EmojiPickerInput,
  },
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'colons',
      title: 'Colons',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'emoticons',
      title: 'Emoticons',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'short_names',
      title: 'Short-names',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'skin',
      title: 'Skin',
      type: 'number',
    },
    {
      name: 'unified',
      title: 'Unified',
      type: 'string',
    },
    {
      name: 'native',
      title: 'Native',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'customCategory',
      title: 'Custom Category',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'native',
      subtitle: 'name',
    },
  },
});
