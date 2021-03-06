import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body {
        font-size: 14px;
        font-weight: 500;
        font-family: ${(props) => props.theme.fonts.main};
        overscroll-behavior-y: contain;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        font-family: inherit;
    }
`;

export default GlobalStyles;
