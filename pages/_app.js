import '@styles/globals.css'
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ primary: theme.dark, secondary: theme.light }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application
