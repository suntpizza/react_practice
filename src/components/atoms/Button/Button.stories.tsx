import React from "react";
import { Button } from ".";

export default {
  title: "Atom/Button",
  component: Button,
};

const Template = () => <Button text="あああ" color="primary" />;

export const Primary = Template.bind({});
// Primary.args = {
//     Primary: true,
//     label: 'button',
// };
