import { FaExternalLinkAlt, FaLink, FaHashtag } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { MdLink } from 'react-icons/md';
// import InlineImageRenderer from '../components/previews/InlineImageRenderer';
import HashIdRenderer from '../components/previews/HashIdRenderer';
import ExternalLinkRenderer from '../components/previews/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/previews/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/previews/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/previews/JumpLinkRenderer';

export default {
  title: 'Block Content',
  name: 'guideBodyPT',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            title: 'Hash Id',
            name: 'hashId',
            type: 'object',
            blockEditor: {
              icon: FaHashtag,
              render: HashIdRenderer,
            },
            fields: [
              {
                title: 'ID',
                name: 'idTag',
                type: 'string',
              },
            ],
          },
          {
            name: 'jumpLink',
            type: 'object',
            title: 'Page Jump Link',
            blockEditor: {
              icon: MdLink,
              render: JumpLinkRenderer,
            },
            fields: [
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the section you would like to jump to',
              },
            ],
          },
          {
            name: 'internalLocal',
            type: 'object',
            title: 'Internal Local Link',
            blockEditor: {
              icon: FaLink,
              render: InternalLocalRenderer,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'page' }, { type: 'soloGuidePage' }, { type: 'listingPage' }],
              },
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the section you would like to jump to',
              },
              {
                name: 'parameter',
                title: 'Parameter(s)',
                type: 'string',
                description: 'Please enter all needed parameters for the link',
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          {
            name: 'internalGlobal',
            type: 'object',
            title: 'Internal Global Link',
            blockEditor: {
              icon: GiLinkedRings,
              render: InternalGlobalRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt,
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: true,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
              {
                title: 'rel=noreferrer?',
                name: 'noreferrer',
                type: 'boolean',
                initialValue: false,
                validation: (Rule) => [Rule.required().error('Field is required')],
              },
            ],
          },
          // {
          //   title: 'Inline Image',
          //   name: 'inlineImage',
          //   type: 'image',
          //   options: {
          //     hotspot: true, // <-- Defaults to false
          //     storeOriginalFilename: true,
          //   },
          //   fields: [
          //     {
          //       name: 'height',
          //       type: 'string',
          //       title: 'Image height',
          //       description: `You can enter a height % of vh. If the image's native height is smaller it will be used instead.`,
          //       options: {
          //         isHighlighted: true, // <-- make this field easily accessible
          //       },
          //     },
          //   ],
          //   blockEditor: {
          //     icon: MdImage,
          //     render: InlineImageRenderer,
          //   },
          //   validation: (Rule) => [Rule.required().error('Missing Image')],
          // },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    { type: 'illustration' },
    { type: 'smartList' },
    { type: 'basicTable' },
    { type: 'smartTable' },
    { type: 'highlightBox' },
    { type: 'videoEmbed' },
    { type: 'btnBlockMui' },
  ],
};
