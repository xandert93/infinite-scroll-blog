import React from 'react';
import styled from 'styled-components';

let Footer = ({ className }) => (
  <footer className={className} title="Visit GitHub page">
    &copy;{' '}
    <a
      className="link-github"
      href="https://github.com/xandert93"
      target="_blank"
      rel="noopener noreferrer"
    >
      xandert.93
    </a>
  </footer>
);

export default Footer = styled(Footer)`
  position: fixed;
  bottom: 4vh;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 1.6rem;

  .link-github {
    color: inherit;
  }
`;
