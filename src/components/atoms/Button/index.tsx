import React from "react";
import { Root, Color } from "./styled";

interface Props {
  text: string;
  color: Color;
}

export const Button: React.VFC<Props> = ({ text, color }) => {
  return (
    <Root type="button" color={color}>
      {text}
    </Root>
  );
};
