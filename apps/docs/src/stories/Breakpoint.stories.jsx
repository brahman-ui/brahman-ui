import React from 'react';

import { Breakpoint } from '@brahman-ui/react';

export default {
  title: 'Breakpoint',
  component: Breakpoint,
  argTypes: {},
};

const Template = (args) => <Breakpoint {...args} />;

export const Default = Template.bind({});

Default.args = {};