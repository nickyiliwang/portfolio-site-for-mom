import React from "react";
import FirebaseAuthUI from "../../util/FirebaseAuthUI";
import Logo from "../../assets/Momstagram Logo.png";
import {
  LoginContainer,
  StyledSection,
  ImageContainer,
} from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <StyledSection>
      <LoginContainer>
        <ImageContainer>
          <img src={Logo} alt="Logo" />
        </ImageContainer>
        <FirebaseAuthUI />
      </LoginContainer>
    </StyledSection>
  );
};

export default LoginPage;
