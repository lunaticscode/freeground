import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonIndex } from './Index';

export default {
  title: 'Component/Button',
  component: ButtonIndex,
} as ComponentMeta<typeof ButtonIndex>;

const Template: ComponentStory<typeof ButtonIndex> = (args) => <ButtonIndex {...args} />;

export const Nomal = Template.bind({});
export const Primary = Template.bind({});
export const Danger = Template.bind({});

Nomal.args = {
    title: "NORMAL", 
};

Primary.args = {
    title: "PRIMARY",
    status: "primary"
}

Danger.args = {
    title: "DANGER",
    status: "danger"
}