import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Form Netlify',
  name: 'formNetlify',
  type: 'document',
  icon: FaWpforms,
  fields: [
    {
      name: 'name',
      title: 'Form name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'subject',
      title: 'Form Subject Line',
      type: 'string',
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        { type: 'textInput' },
        { type: 'textarea' },
        { type: 'select' },
        { type: 'checkbox' },
        { type: 'radio' },
      ],
    },
    {
      name: 'submitBtn',
      title: 'Submit Button',
      type: 'submitBtn',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'thankYou',
      title: 'Thank You Message',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
