import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/globals";
import Theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
