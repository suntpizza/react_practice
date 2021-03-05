import React from "react";
import { IconTextBox } from ".";

export default {
  title: "molecules/IconTextBox",
  component: IconTextBox,
};

const Template = () => (
  <IconTextBox
    iconPath="https://pbs.twimg.com/profile_images/1338451250841411584/KbEIlPLe_400x400.jpg"
    titleText="タイトル"
    descriptionText="ディスクリプション"
    linkText="Learn more"
  />
);

export const Primary = Template.bind({});
// Primary.args = {
//     Primary: true,
//     label: 'button',
// };
