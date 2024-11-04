import { PropsWithChildren } from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import { theme } from "../config/theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme}>
      <ColorSchemeScript />
      {children}
    </MantineProvider>
  );
};
