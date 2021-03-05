import React from "react";
import { Icon, Root, Title, Description } from "./styled";
import { Link } from "../../atoms/Link";

interface Props {
  iconPath: string;
  titleText: string;
  descriptionText: string;
  linkText: string;
}

export const IconTextBox: React.VFC<Props> = ({
  iconPath,
  titleText,
  descriptionText,
  linkText,
}) => {
  return (
    <Root>
      <Icon src={iconPath} alt="" />
      <Title>{titleText}</Title>
      <Description>{descriptionText}</Description>
      <Link text={linkText}></Link>
    </Root>
  );
};
