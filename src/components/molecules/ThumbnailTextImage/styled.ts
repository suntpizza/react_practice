import styled, { css } from "styled-components";
import { ThumbnailBoxStyle } from "../../../themas/FontStyles";

export const Box = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Img = styled.div`
  background: #e5e5e5;
`;

export const Root = styled.div`
  padding: 71px 64px 64px;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: ${ThumbnailBoxStyle.fontSize + "px"};
  line-height: 36px;
  letter-spacing: -0.015em;
  color: #000000;
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.015em;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 32px;
`;
