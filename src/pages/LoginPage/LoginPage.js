import React from "react";
import FirebaseAuth from "../../components/FirebaseAuth/FirebaseAuth";
// styled
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 90vh;
`;

const LoginPage = () => {
  return (
    <StyledSection>
      <h2>LoginPage</h2>
      <FirebaseAuth />

      <div className="center-border">
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </StyledSection>
  );
};

export default LoginPage;
