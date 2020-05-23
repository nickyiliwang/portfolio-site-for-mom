import React from "react";
import FirebaseAuthUI from "../../util/FirebaseAuthUI";
// styled
import styled from "styled-components";
import Logo from "../../assets/Momstagram Logo.png";

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
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

const LoginPage = () => {
  return (
    <StyledSection>
      <LoginContainer>
        <div className="image-container">
          <img src={Logo} alt="LOGO" />
        </div>
        <FirebaseAuthUI />
      </LoginContainer>
    </StyledSection>
  );
};

export default LoginPage;
