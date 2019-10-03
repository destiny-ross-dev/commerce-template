import App, { Container } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Page from "../components/page/page";

const theme = {
  red: "#ff0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightGrey: "#e1e1e1",
  offWhite: "#ededed",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box;
    font-size:10px;
  }
  *, *:before, *:after {
    box-sizing:inherit;
  }
  body {
    padding:0;
    margin:0;
    font-size:1.5rem;
    line-height:2;
  }
  a {
    text-decoration:none;
    color: ${theme.black};
  }
  `;

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Page>
            <Component />
          </Page>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default MyApp;
