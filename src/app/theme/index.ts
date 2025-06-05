import { DefaultTheme } from "styled-components";
import { ColorScheme } from "../@types/styled";
import {
    colors,
    colorScheme,
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

export const theme: ColorScheme & DefaultTheme = {
    colors,
    colorScheme,
    border,
    borderRadius,
    fontFamily,
    fontSize,
    fontWeights,
    media,
    shadows,
    spacing,
};
