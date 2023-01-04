import React from 'react';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import sanity from '../../sanity.json';

export default {
  name: 'sectionDesignSet',
  type: 'document',
  title: 'Section Design Set',
  icon: HiOutlineColorSwatch,
  fieldsets: [
    {
      name: 'background',
      title: 'Background Design',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'foreground',
      title: 'Foreground Design',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'spacing',
      title: 'Spacing',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'background',
      title: 'Background Color',
      type: 'reference',
      fieldset: 'background',
      description: 'This will apply a background color',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      fieldset: 'background',
      description:
        'Background Image will overlay on top of Background Color. The background image is removed for mobile unless it is a repeat background image',
    },
    {
      name: 'bleed',
      title: 'Set Background to Full Bleed',
      fieldset: 'background',
      description:
        'This setting is only applicable to desktop. All smaller screen will be default small',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'repeat',
      title: 'Repeat Background Image',
      fieldset: 'background',
      description:
        'Background image will be repeated in all directions out from the initial centered background image',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'foreground',
      title: 'Foreground Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'link',
      title: 'Link Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'heading',
      title: 'Heading Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'subheading',
      title: 'Subheading Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'subtitle',
      title: 'Subtitle Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'footer',
      title: 'Footer Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'caption',
      title: 'Image Caption Color',
      type: 'reference',
      fieldset: 'foreground',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'outerPadding',
      title: 'Section Outer Padding',
      type: 'paddingSet',
      fieldset: 'spacing',
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    },
    {
      name: 'innerPadding',
      title: 'Section Inner Padding',
      type: 'paddingSet',
      fieldset: 'spacing',
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    },
    {
      name: 'borderRadius',
      title: 'Section Border Radius',
      type: 'string',
      description: (
        <>
          Accept string as per border-radius CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
      hidden: ({ document }) => !!document?.bleed,
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
