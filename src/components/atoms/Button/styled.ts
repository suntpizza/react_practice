import styled, { css } from "styled-components";

export type Color = "primary" | "secondary";
export type Size = "big" | "small";

interface RootProps {
  color: Color;
  size: Size;
}

const colorCSS = {
  primary: css`
    background-color: #18a0fb;
    color: white;
    border: 1px solid #18a0fb;
  `,
  secondary: css`
    background-color: white;
    color: #18a0fb;
    border: 1px solid #18a0fb;
  `,
};

const size = {
  primary: css`
    background-color: #18a0fb;
    color: white;
    border: 1px solid #18a0fb;
  `,
  secondary: css`
    background-color: white;
    color: #18a0fb;
    border: 1px solid #18a0fb;
  `,
};

export const Root = styled.button<RootProps>`
  ${({ color }) => colorCSS[color]}
  width: 192px;
  height: 52px;
  border-radius: 6px;
  font-size: 17px;
`;
