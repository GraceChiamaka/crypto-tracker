import { Spacing } from "../@types/styled";

const colors = {
    green: {
        /* 100: #E8FDEE  */
        100: "#E8FDEE",

        /* 200: #D1FCDD  */
        200: "#D1FCDD",

        /* 300: #5EF78A  */
        300: "#5EF78A",

        /* 400: #19F458  */
        400: "#19F458",

        /* 500: #14C346  */
        500: "#14C346",

        /* 600: #0A6123  */
        600: "#0A6123",

        /* 700: #07491A  */
        700: "#07491A",
    },
    neutral: {
        /*  100: #FFFFFF */
        100: "#FFFFFF",

        /*  200: #F2F2F2 */
        200: "#F2F2F2",

        /*  300: #DADAD8 */
        300: "#DADAD8",

        /*  400: #B6B5B2 */
        400: "#B6B5B2",

        /*  500: #858480 */
        500: "#858480",

        /*  600: #54534D */
        600: "#54534D",

        /*  700: #24221A */
        700: "#24221A",

        /*  800: #0C0A01 */
        800: "#0C0A01",
    },

    orange: {
        /* 100: # */
        100: "#FEEFE7",

        /* 200: #FDE0D0 */
        200: "#FDE0D0",

        /* 300: #F9945B */
        300: "#F9945B",

        /* 400: #F76715 */
        400: "#F76715",

        /* 500: #C55210 */
        500: "#C55210",

        /* 600: #622908 */
        600: "#622908",

        /* 700: #4A1E06 */
        700: "#4A1E06",
    },
    yellow: {
        /* 100: #FEF8E6 */
        100: "#FEF8E6",

        /* 200: #FDF2CE */
        200: "#FDF2CE",

        /* 300: #F8D355 */
        300: "#F8D355",

        /* 400: #F5C10D */
        400: "#F5C10D",

        /* 500: #C49A0A */
        500: "#C49A0A",

        /* 600: #624D05 */
        600: "#624D05",

        /* 700: #493903 */
        700: "#493903",
    },
};

const colorScheme = {
    scheme1: {
        text: colors.neutral[100],
        background: colors.neutral[800],
        foreground: colors.neutral[800],
        border: colors.neutral[100],
        accent: colors.yellow[400],
    },
    scheme2: {
        text: colors.neutral[800],
        background: colors.yellow[200],
        foreground: colors.yellow[200],
        border: colors.neutral[800],
        accent: colors.neutral[800],
    },
    scheme3: {
        text: colors.neutral[800],
        background: colors.yellow[100],
        foreground: colors.yellow[100],
        border: colors.neutral[800],
        accent: colors.neutral[800],
    },
    scheme4: {
        text: colors.neutral[100],
        background: colors.yellow[500],
        foreground: colors.yellow[500],
        border: colors.neutral[100],
        accent: colors.neutral[100],
    },
    scheme5: {
        text: colors.neutral[100],
        background: colors.yellow[700],
        foreground: colors.yellow[700],
        border: colors.neutral[100],
        accent: colors.yellow[400],
    },
    scheme6: {
        text: colors.neutral[100],
        background: colors.yellow[700],
        foreground: colors.yellow[700],
        border: colors.neutral[100],
        accent: colors.yellow[400],
    },
};

/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
    `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) => `@media only screen and (min-width: ${minWidth}px)`;

interface Media {
    custom: (minWidth: number, maxWidth: number) => string;
    customDesktop: (minWidth: number) => string;
    mobile: string;
    tablet: string;
    smallLaptop: string;
    largeLaptop: string;
    extraLargeLaptop: string;
}

const media: Media = {
    custom: customMediaQuery,

    customDesktop: extraMediaQuery,
    /**
     * Mobile devices
     */
    mobile: customMediaQuery(250, 480),
    /**
     * iPads, Tablets
     */
    tablet: customMediaQuery(481, 768),
    /**
     * fairly large displays like small laptops
     */
    smallLaptop: customMediaQuery(769, 1024),
    /**
     * large laptops
     */
    largeLaptop: customMediaQuery(1025, 1200),
    /**
     * extra large laptops
     */
    extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}rem`;
const customBorder = (pixel: string, color: string) => `${pixel} solid ${color}`;
const circleRadius = () => `50%`;
const doubleSpacing = (x: number, y: number) => `${x}rem ${y}rem`;

const fontSize = {
    custom: customFontSize,
    tiny: customFontSize(0.75),
    small: customFontSize(0.875),
    normal: customFontSize(1),
    medium: customFontSize(1.125),
    large: customFontSize(1.25),
    xl: customFontSize(1.5),
    "2xl": customFontSize(2),
    "3xl": customFontSize(2.25),
    "4xl": customFontSize(2.5),
    "5xl": customFontSize(3),
    "6xl": customFontSize(3.5),
};

const fontFamily = {
    bio: "Bio",
    bioMd: "BioMd",
    bioSM: "BioSM",
    bioBold: "BioBold",
    regular: "DMSans, sans-serif",
    medium: "DMSansMedium, sans-serif",
    semibold: "DMSansSemiBold, sans-serif",
    bold: "DMSansBold, sans-serif",
};
const weights = [400, 500, 600, 700];

const fontWeights = {
    regular: weights[0],
    medium: weights[1],
    semibold: weights[2],
    bold: weights[3],
};
const spacing: Spacing = {
    tiny: customSpacing(0.75),
    small: customSpacing(0.875),
    normal: customSpacing(1),
    medium: customSpacing(1.125),
    large: customSpacing(1.25),
    xl: customSpacing(1.5),
    "2xl": customSpacing(2),
    "3xl": customSpacing(2.25),
    "4xl": customSpacing(2.5),
    "5xl": customSpacing(3),
    "6xl": customSpacing(3.5),
    double: doubleSpacing,
    custom: customSpacing,
};

const borderRadius = {
    default: "10px",
    input: "6px",
    button: "8px",
    custom: customRadius,
    round: circleRadius,
};



const shadows = {
    xxsmall: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    xsmall: " 0px 1px 3px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(0, 0, 0, 0.06)",
    small: "0px 4px 8px -2px rgba(0, 0, 0, 0.1), inset 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
    medium: " 0px 12px 16px -4px rgba(0, 0, 0, 0.08), inset 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
    large: "0px 20px 24px -4px rgba(0, 0, 0, 0.08),inset 0px 8px 8px -4px rgba(0, 0, 0, 0.03)",
    xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
    xxlarge: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
};

const border = {
    custom: customBorder,
    white: customBorder("1px", colors.neutral[100]),
    black: customBorder("1px", colors.neutral[800]),
    buttonWhite: customBorder("2px", colors.neutral[100]),
    buttonBlack: customBorder("2px", colors.neutral[800]),
};

export { colors, colorScheme, media, fontSize, fontFamily, borderRadius, spacing, shadows, border, fontWeights };
