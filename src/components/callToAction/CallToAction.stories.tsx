import React from 'react';
import C001 from './C001'
import C002 from './C002'
import C003 from './C003'
import C004 from './C004'

export default {
  title: 'Example/CallToAction',
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

export const Comp004 = {
  render: (args)=>(<C004 {...args} />),
  args: {}
}
