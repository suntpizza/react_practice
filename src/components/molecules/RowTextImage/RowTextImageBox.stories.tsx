import React from "react";
import { RowTextImageBox } from ".";

export default {
  title: "molecules/RowTextImageBox",
  component: RowTextImageBox,
};

const Template = () => (
  <RowTextImageBox
    imgPath="https://yt3.ggpht.com/ytc/AAUvwnigdiV8DCcRASxeJLuy6EEeN93JwToa7ucAJgvMZA=s48-c-k-c0x00ffffff-no-rj-mo"
    position="right"
    buttonColor="primary"
    buttonText="あああ"
    titleText="タイトル"
    descriptionText="説明"
  />
);

export const Primary = Template.bind({});
// Primary.args = {
//     Primary: true,
//     label: 'button',
// };
