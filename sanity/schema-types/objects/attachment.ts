import { defineField, defineType } from 'sanity';
import { RiAttachmentLine } from 'react-icons/ri';

export const Attachment = defineType({
  icon: RiAttachmentLine,
  name: 'attachment',
  title: 'Bestand',
  type: 'file',
  fields: [
    defineField({
      title: 'Naam van bestand',
      name: 'name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Vul een bestandsnaam in bij Bestand -> Edit Details'),
    }),
  ],
});
