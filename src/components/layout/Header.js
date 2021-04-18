import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 2.8rem;
  letter-spacing: 3px;
  height: 15vh;
  padding-top: 2.5rem;

  @media only screen and (min-width: 22.5em) and (min-height: 40em) {
    height: 13vh;
  }

  @media only screen and (min-width: 22.5em) and (min-height: 45em) {
    height: 10vh;
  }

  @media only screen and (min-width: 25em) and (min-height: 45em) {
    height: 12vh;
  }
`;

const Header = () => <StyledHeader>Infinite Scroll Blog</StyledHeader>;

export default Header;
