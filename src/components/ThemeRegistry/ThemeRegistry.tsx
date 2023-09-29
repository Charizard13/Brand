"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import GlobalStyles from "@mui/joy/GlobalStyles";
import theme from "./theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider theme={theme} defaultMode="dark">
        <GlobalStyles
          styles={{
            ".material-symbols-rounded": {
              fontFamily: "Material Symbols Rounded",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: "24px",
              display: "inline-block",
              lineHeight: "1",
              textTransform: "none",
              letterSpacing: "normal",
              wordWrap: "normal",
              whiteSpace: "nowrap",
              direction: "ltr",
            },
          }}
        />{" "}
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
