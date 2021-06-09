import { RiAttachmentLine } from 'react-icons/ri';

import { FileType } from '../../lib/data-types';

export const Attachment: FileType = {
  icon: RiAttachmentLine,
  name: 'attachment',
  title: 'Bestand',
  type: 'file',
  fields: [
    {
      title: 'Naam van bestand',
      name: 'name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Vul een bestandsnaam in bij Bestand -> Edit Details'),
    },
  ],
};
