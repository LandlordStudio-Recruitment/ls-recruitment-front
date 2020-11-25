import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as React from "react";

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ececec",
      dark: "#dadada",
      contrastText: "#6a6a6a",
    },
    secondary: {
      light: "#f0f7ff",
      main: "#034372",
      dark: "#112331",
      contrastText: "#fff",
    },
  },
});

export function withRoot(Component: any) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    return (
      <ThemeProvider theme={theme}>
        {/* component to kickstart an elegant, consistent, and simple baseline to build upon */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}
