import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header, UserProps } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: { email: "test@test.com", username: "humanwater" } as UserProps,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
