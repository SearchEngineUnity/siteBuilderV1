// This is a type "Illustration"
export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'align',
      type: 'string',
      title: 'Alignment',
      description: 'This only affects image alignment in portable text.',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
        // isHighlighted: true, // <-- make this field easily accessible
      },
      initialValue: 'center',
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'Image Max Width',
      description: `You can enter a width in pixels. If the image's native width is smaller it will be used instead.`,
      // options: {
      //   isHighlighted: true, // <-- make this field easily accessible
      // },
    },
    {
      name: 'maxHeight',
      type: 'number',
      title: 'Image Max Height',
      description: `You can enter a height in pixels. If the image's native height is smaller it will be used instead.`,
      // options: {
      //   isHighlighted: true, // <-- make this field easily accessible
      // },
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
      // options: {
      //   // isHighlighted: true, // <-- make this field easily accessible
      // },
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
