import styled from "styled-components";
import { PageContent } from "../components/page/page.styles";

export default () => (
  <IndexPage>
    <Title>Page Content</Title>
  </IndexPage>
);

const IndexPage = styled(PageContent)``;

const Title = styled.h1`
  color: blue;
`;
