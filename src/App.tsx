import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyle from "./style/globalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home title="Hi" />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
