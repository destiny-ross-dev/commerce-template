import styled from "styled-components";

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.red};
  color: white;
`;
