import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 14px;
        font-weight: 500;
        font-family: ${(props) => props.theme.fonts.main};
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
