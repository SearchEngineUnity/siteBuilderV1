import { FiPhoneCall } from 'react-icons/fi';

export default {
  title: 'Call us',
  name: 'navPhone',
  type: 'object',
  icon: FiPhoneCall,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Call us text',
    },
  ],
  preview: {
    select: {
      name: 'text',
    },
    prepare({ name }) {
      return {
        title: name,
        subtitle: 'Links to company phone #',
      };
    },
  },
};
