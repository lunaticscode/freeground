import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WelcomeTypingText from './TypingText';

export default {
  title: 'Component/Welcome/TypingText',
  component: WelcomeTypingText,
} as ComponentMeta<typeof WelcomeTypingText>;

const Template: ComponentStory<typeof WelcomeTypingText> = (args) => <WelcomeTypingText {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    //user: { email: "test@test.com", username: "humanwater" },
  };
  
export const LoggedOut = Template.bind({});
LoggedOut.args = {};