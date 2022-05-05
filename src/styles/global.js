import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body, button{
    font-family: 'Space Mono', monospace;
}

html{
    scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6, p, span{
    cursor: default;
}
`
  