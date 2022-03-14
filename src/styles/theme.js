import { ThemeProvider } from "styled-components";

function Theme({ children }) {
  const theme = {
    colors: {
      black: "#171a20",
      white: "#ffffff",
    },
    fonts: {
      main: "'Gotham', sans-serif",
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
