import { BsCardImage } from 'react-icons/bs';

export default {
  title: 'Clickable Image',
  name: 'navClickableImage',
  type: 'object',
  description: 'Only functional for main header and not main footer.',
  icon: BsCardImage,
  fields: [
    {
      name: 'image',
      type: 'clickableImageImage',
      title: 'Image',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'affiliateLink' },
        { type: 'jumpLink' },
      ],
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    },
  ],
  preview: {
    select: {
      alt: 'image.alt',
      media: 'image.asset',
    },
    prepare({ alt, media }) {
      return {
        title: alt,
        media,
      };
    },
  },
};
