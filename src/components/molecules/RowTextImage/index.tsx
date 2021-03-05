import React from "react";
import { Root, Position, TextBox, ImgWrap } from "./styled";
import { Color } from "../../atoms/Button/styled";

interface Props {
  position: Position;
  buttonColor: Color;
  buttonText: string;
  titleText: string;
  descriptionText: string;
  imgPath: string;
}

export const RowTextImageBox: React.VFC<Props> = ({
  position,
  buttonColor,
  buttonText,
  titleText,
  descriptionText,
  imgPath,
}) => {
  return (
    <Root position={position}>
      <ImgWrap>
        <img src={imgPath} alt="" />
      </ImgWrap>
      <TextBox
        position={position}
        buttonColor={buttonColor}
        buttonText={buttonText}
        titleText={titleText}
        descriptionText={descriptionText}
      ></TextBox>
    </Root>
  );
};
