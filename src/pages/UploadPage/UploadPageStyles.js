import { wrapper } from "../../components/GlobalStyles/GlobalStyles";
import styled from "styled-components";

export const StyledSection = styled.section`
  ${wrapper}
  margin-top: 64px;
  padding-top: 20px;
`;

export const StyledDropZoneDiv = styled.div`
  margin-bottom: 30px;
`;

export const StyledImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
