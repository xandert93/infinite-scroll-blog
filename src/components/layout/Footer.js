import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer.attrs({ title: 'Visit GitHub page' })`
  position: fixed;
  bottom: 4vh;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 1.6rem;
`;

const Link = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  color: inherit;
`;

const GitHubLink = styled(Link).attrs({
  href: 'https://github.com/xandert93',
})``;

const Footer = () => (
  <StyledFooter>
    &copy; <GitHubLink>xandert.93</GitHubLink>
  </StyledFooter>
);

export default Footer;
