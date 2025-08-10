import "styled-components";

type ColorsTheme = {
    background: string;
    accent: string;
    text: string;
    primary: string;
    secondary: string;
    muted: string;
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
    bio: string;
    bioMd: string;
    bioSM: string;
    bioBold: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
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
        borderRadius;
        border;
        fontWeights: FontWeights;
        mode: "light" | "dark";
    }
}
