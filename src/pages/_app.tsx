import React from "react";
import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import theme from "src/style/theme";
import globalStyle from "src/style/global";
import normalize from "src/style/normalize";
import { Global } from "@emotion/core";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Component {...pageProps} />
          <Global styles={normalize} />
          <Global styles={globalStyle} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MyApp;
