import { css } from "styled-components";

export const wrapper = css`
  max-width: 1440px;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 95%;
  }
`;
