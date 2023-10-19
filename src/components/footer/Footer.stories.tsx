import React from 'react';
import C001 from './C001'
import C002 from './C002'
import C003 from './C003'

export default {
  title: 'Example/Footer',
  tags: ['autodocs'],
  component: C001,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Comp001 = {
  render: (args)=>(<C001 {...args} />),
  args: {}
};

export const Comp002 = {
  render: (args)=>(<C002 {...args} />),
  args: {}
}

export const Comp003 = {
  render: (args)=>(<C003 {...args} />),
  args: {}
}

