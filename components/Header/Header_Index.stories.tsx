import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HedaerIndex } from './HeaderIndex';

export default {
  title: 'Component/Header',
  component: HedaerIndex,
} as ComponentMeta<typeof HedaerIndex>;

const Template: ComponentStory<typeof HedaerIndex> = (args) => <HedaerIndex {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: { email: "test@test.com", username: "humanwater" },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null
};
