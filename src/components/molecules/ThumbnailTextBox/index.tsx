import React from "react";
import { Root, Title, Description } from "./styled";
import { Button } from "../../atoms/Button";
import { Color } from "../../atoms/Button/styled";

interface Props {
  buttonColor: Color;
  buttonText: string;
  titleText: string;
  descriptionText: string;
}

export const ThumbnailTextBox: React.VFC<Props> = ({
  buttonText,
  buttonColor,
  titleText,
  descriptionText,
}) => {
  return (
    <Root>
      <Title>{titleText}</Title>
      <Description>{descriptionText}</Description>
      <Button text={buttonText} color={buttonColor}></Button>
    </Root>
  );
};
