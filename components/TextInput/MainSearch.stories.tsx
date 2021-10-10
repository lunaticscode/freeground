import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainSearch } from './MainSearch';

export default {
  title: 'Component/TextInput/MainSearch',
  component: MainSearch,
} as ComponentMeta<typeof MainSearch>;

const Template: ComponentStory<typeof MainSearch> = (args) => <MainSearch {...args} />;

export const Unactive = Template.bind({})
export const Active = Template.bind({});
export const Loading = Template.bind({});

Unactive.args = {
    
}

Active.args = {

}

Loading.args = {

}
