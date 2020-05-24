import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background: #ffffff;
  padding: 60px 0 90px 0;
  width: 350px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: 250px;
    padding: 20px 0;
  }
`;
