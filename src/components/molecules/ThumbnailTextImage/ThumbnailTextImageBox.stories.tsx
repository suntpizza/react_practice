import React from "react";
import { ThumbnailTextImageBox } from ".";

export default {
  title: "molecules/ThumbnailTextImageBox",
  component: ThumbnailTextImageBox,
};

const Template = () => (
  <ThumbnailTextImageBox
    imgPath="https://ferret.akamaized.net/uploads/article/14782/eyecatch/default-3615e1e606d5f49eca881fbdc2dd1112.jpg"
    titleText="タイトル"
    descriptionText="ディスクリプション"
  />
);

export const Primary = Template.bind({});
// Primary.args = {
//     Primary: true,
//     label: 'button',
// };
