import { AiOutlineColumnWidth } from 'react-icons/ai';

export default {
  name: 'colWidth',
  type: 'object',
  title: 'Table Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    {
      name: 'width',
      type: 'string',
      title: 'Please enter value in px.',
    },
  ],
  preview: {
    select: {
      title: 'width',
    },
  },
};
