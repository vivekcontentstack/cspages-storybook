import React from 'react';
import C001 from './C001'
import C002 from './C002'

export default {
  title: 'Example/Header',
  tags: ['autodocs'],
  component: C001,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  render: (args)=>(<C001 {...args} />),
  args: {}
};

export const LoggedOut = {
  render: (args)=>(<C002 {...args} />),
  args: {}
}
