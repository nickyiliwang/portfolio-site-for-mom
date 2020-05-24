import React from "react";
import FirebaseAuthUI from "../../util/FirebaseAuthUI";
import Logo from "../../assets/Momstagram Logo.png";
import { LoginContainer, StyledSection } from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <StyledSection>
      <LoginContainer>
        <div className="image-container">
          <img src={Logo} alt="Logo" />
        </div>
        <FirebaseAuthUI />
      </LoginContainer>
    </StyledSection>
  );
};

export default LoginPage;
