import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navbar from "../../Components/Navbar";

export default {
  title: "Mine/nav",
  component: Navbar,
  paramenters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Ekong = Template.bind({});

Ekong.args = {
  name: "Ekong Agba",
};

export const Bitee = Template.bind({});
Bitee.args = {
  name: "Agba Biteeee",
};
