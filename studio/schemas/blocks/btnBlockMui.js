import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'btnBlockMui',
  title: 'Button',
  type: 'object',
  icon: BsBootstrap,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'idTag',
      title: 'Button ID',
      type: 'string',
      description: 'Add ID to the button. Please only use alphanumeric characters and hypen.',
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
    {
      name: 'btnAlignment',
      title: 'Button Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'flex-start',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'design', // fix to btnDesign for V2
      title: 'Button Design Option',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      text: 'text',
      id: 'idTag',
    },
    prepare({ text, id }) {
      return {
        title: text,
        subtitle: `ID: ${id}`,
      };
    },
  },
};
