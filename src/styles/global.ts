import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0;
  }

  body {
    background: ${(props) => props.theme['secondary-700']};
    color: ${(props) => props.theme['neutral-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    border: none;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 800;
    font-size: 1.125rem
  }

  h1 {
    font-size: 3rem;
    line-height: 62.4px;
    color: ${(props) => props.theme['neutral-100']};
  }

  h2 {
    font-size: 2rem;
    line-height: 41.6px;
    color: ${(props) => props.theme['neutral-100']};
  }

  h3 {
    line-height: 23.4px;
  }

  input {
    border: 0;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
`