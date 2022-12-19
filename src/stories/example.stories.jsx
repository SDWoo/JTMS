import React from 'react';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;
