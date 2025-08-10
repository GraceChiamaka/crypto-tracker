"use client";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.background};;
    color: ${({ theme }) => theme.colors.text};;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "DMSans", sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

`;
