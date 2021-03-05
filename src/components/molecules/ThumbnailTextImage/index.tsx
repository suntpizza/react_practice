import React from "react";
import { Box, Img, Root, Title, Description } from "./styled";

interface Props {
  imgPath: string;
  titleText: string;
  descriptionText: string;
}

export const ThumbnailTextImageBox: React.VFC<Props> = ({
  imgPath,
  titleText,
  descriptionText,
}) => {
  return (
    <Box>
      <Img>
        <img src={imgPath} />
      </Img>
      <Root>
        <Title>{titleText}</Title>
        <Description>{descriptionText}</Description>
      </Root>
    </Box>
  );
};
