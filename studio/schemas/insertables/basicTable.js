import { FaTable } from 'react-icons/fa';

export default {
  name: 'basicTable',
  title: 'Table',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table Name',
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
      name: 'minWidth',
      type: 'string',
      title: 'Minimum Table Width',
      description: 'Please make sure to include px with the minimum width number. example 100px',
    },
    {
      name: 'colgroup',
      type: 'array',
      title: 'Column Width Settings',
      description: `Sets the column widths in order from left to right. Columns with '0' and columns that don't have an item will split the remaining width equally.`,
      of: [{ type: 'colWidth' }],
    },
    {
      name: 'table',
      type: 'table',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
