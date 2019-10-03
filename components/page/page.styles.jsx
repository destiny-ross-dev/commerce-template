import styled from "styled-components";

export const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  min-height: 100vh;
`;

export const PageContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  /* min-height: calc(100vh - 60px); */
`;
