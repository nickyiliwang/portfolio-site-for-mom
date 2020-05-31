import styled from "styled-components";

export const StyledUserInfo = styled.div`
  width: 60%;
  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
  padding-top: 20px;

  h2 {
    font-size: 28px;
  }

  a {
    color: rgba(var(--fe0, 0, 55, 107), 1);
    text-decoration: none;
    font-weight: 600;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;
