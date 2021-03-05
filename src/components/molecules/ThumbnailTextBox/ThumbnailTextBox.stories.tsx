import React from "react";
import { ThumbnailTextBox } from ".";

export default {
  title: "molecules/ThumbnailTextBox",
  component: ThumbnailTextBox,
};

const Template = () => (
  <ThumbnailTextBox
    buttonText="ああああ"
    buttonColor="secondary"
    titleText="タイトル"
    descriptionText="ディスクリプション"
  />
);

export const Primary = Template.bind({});
// Primary.args = {
//     Primary: true,
//     label: 'button',
// };
