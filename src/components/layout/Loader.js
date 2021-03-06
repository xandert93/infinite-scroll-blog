import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: initial;
    transform: initial;
  }`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  transition: opacity 0.3s ease-in;
  animation: ${fadeIn} 1s;
`;

const bounce = keyframes`
  0%,
  100% {
    transform: initial;
  }
  50% {
    transform: translateY(-5px);
  }`;

const Circle = styled.div`
  border-radius: 50%;
  height: 0.6rem;
  width: 0.6rem;
  margin: 0 4px;
  background: white;
  animation: ${bounce} 0.5s ease-in infinite;
`;

const CircleTwo = styled(Circle)`
  animation-delay: 0.1s;
`;

const CircleThree = styled(Circle)`
  animation-delay: 0.2s;
`;

const Loader = () => (
  <LoaderContainer>
    <Circle />
    <CircleTwo />
    <CircleThree />
  </LoaderContainer>
);

export default Loader;
