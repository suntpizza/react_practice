import React from "react";
import { Button } from '.';

export default {
    title: "Atom/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Primary: true,
    label: 'button',
};