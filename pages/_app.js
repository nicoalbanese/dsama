import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
	margin: 0;
	font-family: "Open Sans", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, p {
	margin: 0;
}
`;

const theme = {
  colors: {
    primary: "#EE1D52",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
