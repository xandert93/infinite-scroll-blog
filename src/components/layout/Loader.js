import styled, { keyframes } from 'styled-components';

let Loader = ({ className }) => (
  <div className={className}>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
);

const bounce = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }`;

export default Loader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  transition: opacity 0.3s ease-in;

  .circle {
    border-radius: 50%;
    height: 0.6rem;
    width: 0.6rem;
    margin: 0 4px;
    background: white;
    animation: ${bounce} 0.5s ease-in infinite;
  }

  .circle:nth-of-type(2) {
    animation-delay: 0.1s;
  }

  .circle:nth-of-type(3) {
    animation-delay: 0.2s;
  }
`;
