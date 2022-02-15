export default {
  name: 'palette',
  type: 'document',
  title: 'Palette',
  __experimental_actions: ['create', 'update', 'publish'],
  fieldsets: [
    {
      name: 'common',
      title: 'Common Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'text',
      title: 'Text Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'background',
      title: 'Background Color Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'brand',
      title: 'Brand Color Setting Packs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'highlightBox',
      title: 'Highlight Box Color Setting Packs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'black',
      title: 'Common Dark Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    },
    {
      name: 'white',
      title: 'Common Light Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    },
    {
      name: 'primaryText',
      title: 'Text Primary Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'secondaryText',
      title: 'Text Secondary Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'disabledText',
      title: 'Text Disabled Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'hintText',
      title: 'Text Hint Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'divider',
      title: 'Divider Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'paper',
      title: 'Background Paper Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    },
    {
      name: 'default',
      title: 'Background Default Color Setting',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    },
    {
      name: 'primary',
      title: 'Primary Color Setting Pack',
      type: 'muiColorSet',
      description: 'Used to generate the primary accent color for websites, press materials, etc',
      fieldset: 'brand',
    },
    {
      name: 'secondary',
      title: 'Secondary Color Setting Pack',
      type: 'muiColorSet',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
      fieldset: 'brand',
    },
    {
      name: 'definition',
      title: 'Definition Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'dyk',
      title: 'Did You Know Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'important',
      title: 'Important Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'proTip',
      title: 'Pro Tip HighLight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'warning',
      title: 'Warning Highlight Box',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Palette`,
      };
    },
  },
};
