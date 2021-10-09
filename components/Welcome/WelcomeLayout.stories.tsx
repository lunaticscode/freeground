import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WelcomeLayout from './Layout';

export default {
  title: 'Component/Welcome/Layout',
  component: WelcomeLayout,
} as ComponentMeta<typeof WelcomeLayout>;

const Template: ComponentStory<typeof WelcomeLayout> = (args) => <WelcomeLayout {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  //user: { email: "test@test.com", username: "humanwater" },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
