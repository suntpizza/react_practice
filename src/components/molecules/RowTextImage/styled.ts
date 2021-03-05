import styled, { css } from "styled-components";
import { ThumbnailTextBox } from "../ThumbnailTextBox";

export type Position = "left" | "right";

interface RootProps {
  position: Position;
}

export const Root = styled.div<RootProps>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
`;

export const TextBox = styled(ThumbnailTextBox)<RootProps>`
  padding: ${({ position }) =>
    position === "left" ? "0 0 0 10px" : "0 10px 0 0"};
`;

// export const Wrap = styled.div`
//   width: 100%;
// `;

export const ImgWrap = styled.div`
  object-fit: cover;
`;
