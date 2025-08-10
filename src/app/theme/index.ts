import { DefaultTheme } from "styled-components";

import {
    colors,
    border,
    borderRadius,
    fontFamily,
    fontSize,
    fontWeights,
    media,
    shadows,
    spacing,
} from "./declarations.ts";
export * from "./ThemeProvider.tsx";
export * from "./globalStyles.ts";

export const lightTheme: DefaultTheme = {
    colors: colors.light,
    border: border.light,
    borderRadius,
    fontSize,
    fontFamily,
    fontWeights,
    // shadows: lightShadows,
    media,
    spacing,
    mode: "light" as const,
};

export const darkTheme: DefaultTheme = {
    colors: colors.dark,
    border: border.dark,
    borderRadius,
    fontSize,
    fontFamily,
    fontWeights,
    // shadows: darkShadows,
    media,
    spacing,
    mode: "dark" as const,
};
