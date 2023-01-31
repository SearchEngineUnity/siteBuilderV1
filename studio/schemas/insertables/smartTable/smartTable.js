import { GrTableAdd } from 'react-icons/gr';

export default {
  name: 'smartTable',
  title: 'Smart Table',
  type: 'object',
  icon: GrTableAdd,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table Name',
      description: 'This is for label purpose in studio only.',
    },
    {
      name: 'colHeading',
      type: 'boolean',
      title: 'This table has a column heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'rowHeading',
      type: 'boolean',
      title: 'This table has a row heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'fixedFirstColumn',
      type: 'boolean',
      title: 'This table has a fixed first column',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'maxWidth',
      type: 'string',
      title: 'Max Table Width',
      description: 'Please make sure to include px with the minimum width number (ie. 100px).',
    },
    {
      name: 'colgroup',
      type: 'array',
      title: 'Column Width Settings',
      description: `Sets the column widths in order from left to right. This must be set in px.`,
      of: [{ type: 'colWidth' }],
    },
    {
      name: 'table',
      type: 'tablePlus',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
