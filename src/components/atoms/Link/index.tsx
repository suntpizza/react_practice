import React from "react";
import { Root } from "./styled";

interface Props {
  text: string;
}

export const Link: React.VFC<Props> = ({ text }) => {
  return <Root>{text}</Root>;
};
