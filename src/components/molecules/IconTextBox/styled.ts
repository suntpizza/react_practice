import styled, { css } from "styled-components";

export const Icon = styled.img`
  width: 108px;
  height: 108px;
  max-width: 200px;
  max-height: 200px;
  background: #e5e5e5;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const Root = styled.div``;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
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
