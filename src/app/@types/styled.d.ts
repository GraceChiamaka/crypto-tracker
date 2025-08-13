import "styled-components";

type ColorsTheme = {
    background: string;
    accent: string;
    accent2: string;
    text: string;
    primary: string;
    secondary: string;
    muted: string;
    textAccent: string;
    red: string;
    green: string;
    white: string;
};

type FontSizes = {
    custom: (fontSize: number) => string /* custom */;
    tiny: string;
    small: string;
    medium: string;
    normal: string;
    large: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
};

type FontFamily = {
    onest: string;
    mono: string;
    sans: string;
    geist: string;
};

export type Spacing = {
    tiny: string;
    small: string;
    medium: string;
    normal: string;
    large: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    double: (value: number, value2: number) => string;
    custom: (val: number) => string;
};

export type Media = {
    custom: (minWidth: number, maxWidth: number) => string;
    customDesktop: (minWidth: number) => string;
    mobile: string;
    tablet: string;
    smallLaptop: string;
    largeLaptop: string;
    extraLargeLaptop: string;
};

export type Weights = "regular" | "medium" | "semibold" | "bold";

export type FontWeights = {
    [key in TextWeights]: number;
};
export type Shadows = {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
};

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ColorsTheme;
        fontSize: FontSizes;
        fontFamily: FontFamily;
        // shadows: Shadows;
        spacing: Spacing;
        media: Media;
        borderRadius: {
            default: string;
            input: string;
            button: string;
            custom: (val: number) => string;
            round: () => string;
        };
        border: string;

        fontWeights: FontWeights;
        mode: "light" | "dark";
    }
}
