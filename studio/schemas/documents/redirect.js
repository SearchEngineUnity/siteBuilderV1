import { BsArrowLeftRight } from 'react-icons/bs';

export default {
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  icon: BsArrowLeftRight,
  fields: [
    {
      name: 'redirectPaths',
      type: 'array',
      title: 'Redirect Source(s)',
      description:
        'Please enter the full path after the domain address starting with /. Upon landing on one of these URLs, the visitor will be redirected to the path selected above',
      of: [{ type: 'string' }],
      validation: (Rule) => [
        Rule.custom((sources) => {
          if (!sources) {
            return {
              message: 'Need at least one source',
              paths: [],
            };
          }
          return true;
        }),
        Rule.custom((sources) => {
          const emptyPaths = [];

          (sources || []).map((source, index) => {
            if (source.length === 0) {
              emptyPaths.push(index);
            }
            return null;
          });

          if (emptyPaths.length > 0) {
            return {
              message: 'Field is empty',
              paths: emptyPaths,
            };
          }
          return true;
        }),
        Rule.custom((sources) => {
          const wrongPaths = [];

          (sources || []).map((source, index) => {
            if (!source.match(/^(http:\/\/|https:\/\/|\/)/g)) {
              wrongPaths.push(index);
            }
            return null;
          });

          if (wrongPaths.length > 0) {
            return {
              message: 'Incorrect format',
              paths: wrongPaths,
            };
          }
          return true;
        }),
      ],
    },
    {
      name: 'redirectTo',
      title: 'Redirect Destination',
      type: 'string',
      description:
        'For internal redirect, please enter full path after the domain address starting with /. For external redirect, please enter the full url starting with https or http',
      validation: (Rule) => [
        Rule.custom((destination) => {
          if (!destination) {
            return {
              message: 'Field is empty',
            };
          }
          return true;
        }),
        Rule.custom((destination) => {
          if (!destination.match(/^(http:\/\/|https:\/\/|\/)/g)) {
            return {
              message: 'Incorrect format',
            };
          }
          return true;
        }),
      ],
    },
  ],
  preview: {
    select: {
      slug: 'redirectTo',
    },
    prepare({ slug }) {
      return {
        title: slug,
        subtitle: 'redirect to',
      };
    },
  },
};
