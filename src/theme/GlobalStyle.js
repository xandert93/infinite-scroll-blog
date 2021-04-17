import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`



html {
  font-size: 62.5%;
  @media only screen and (min-width: 22.5em) and (min-height: 40em) {
    font-size: 75%;
  }
  @media only screen and (min-width: 25em) and (min-height: 45em) {
    font-size: 81.25%;
  }

  @media only screen and (min-width: 30em) {
    font-size: 81.25%;
  }

  @media only screen and (min-width: 35em) {
    font-size: 87.5%;
  }
  @media only screen and (min-width: 45em) {
    font-size: 93.75%;
  }
  @media only screen and (min-width: 55em) {
    font-size: 100%;
  }
  @media only screen and (min-width: 65em) {
    font-size: 106.25%;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  font-family: 'Questrial', sans-serif;
  color: white;
  text-align: center;
}

#root {
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 77, 192), black 60%) no-repeat;
  overflow: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
  /* display: none; */
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}

`;
