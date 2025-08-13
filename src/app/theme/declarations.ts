import { Spacing } from "../@types/styled";
import { fontGeist, fontDMMono, fontDMSans, fontOnest } from "@fonts/font";

const colors = {
    light: {
        background: "#FFFFFF",
        accent: "#FBFAFF",
        accent2: "#E5E0FF",
        primary: "#7D67FF",
        text: "#352E5B",
        textAccent: "#C0BBE0",
        secondary: "#FFFFFF",
        muted: "#A5A2B8",
        red: "#F46565",
        green: "#3EDD87",
        white: "#FFFFFF",
    },
    dark: {
        background: "#0B091A",
        accent: "#131024",
        accent2: "#1C1833",
        primary: "#7D67FF",
        text: "#E1DFEC",
        textAccent: "#FFFFFF",
        secondary: "#0D0B1C",
        muted: "#E1DFEC",
        red: "#F46565",
        green: "#3EDD87",
        white: "#FFFFFF",
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
    onest: fontOnest.style.fontFamily,
    mono: fontDMMono.style.fontFamily,
    geist: fontGeist.style.fontFamily,
    sans: fontDMSans.style.fontFamily,
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
    dark: customBorder("1px", colors.dark.primary),
    light: customBorder("1px", colors.light.primary),
};

export { colors, media, fontSize, fontFamily, borderRadius, spacing, shadows, border, fontWeights };
