const colors = {
    primary: {
        100: "#F5F4F3",
    },
    black: {
        100: "#1C1C28",
        200: "#000000",
    },
    blue: {
        50: "#E3EFFC",
        100: "#C6DDF7",
        200: "#0D5EBA",
        300: "#EAF6FD",
        400: "#366BC5",
    },
    green: {
        50: "#E7F6EC",
        75: "#B5E3C4",
        100: "#0F973D",
        200: "#04802E",
    },
    white: "#FFFFFF",
    neutral: {
        brown: {
            50: "#FBF1F1",
            75: "#F0E6E6",
            100: "#E4DBDB",
            200: "#CDC4C4",
            300: "#B7AFAF",
            400: "#A29999",
            500: "#8D8484",
            600: "#787070",
            700: "#645D5D",
            800: "#514A4A",
            900: "#3E3838",
        },
        grey: {
            50: "#F9FAFB",
            75: "#F7F9FC",
            100: "#F0F2F5",
            200: "#E4E7EC",
            300: "#D0D5DD",
            400: "#98A2B3",
            500: "#667185",
            600: "#475367",
            700: "#344054",
            800: "#1D2739",
            900: "#101928",
        },
    },
    // error-red
    red: {
        50: "#FBEAE9",
        75: "#D42620",
        100: "#F2BCBA",
    },
    secondary: {
        50: "#FFE7CC",
        75: "#101828",
    },
    yellow: {
        50: "#FEF6E7",
        75: "#FBE2B7",
        100: "#F3A218",
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
    tiny: customFontSize(0.75), // 0.75rem
    small: customFontSize(0.875), // 0.75rem
    normal: customFontSize(1),

    displayLarge: customFontSize(3.5),
    displaySmall: customFontSize(3),
    heading1: customFontSize(2.5), // 2.5
    heading2: customFontSize(2.25), // 2.25rem
    heading3: customFontSize(2), // 2rem
    heading4: customFontSize(1.75), // 1.75rem
    heading5: customFontSize(1.5), // 1.5rem
    heading6: customFontSize(1.375), // 1.375rem
};

const fontFamily = {
    inter: "Inter, sans-serif",
    regular: "Onest, sans-serif",
    medium: "OnestMedium, sans-serif",
    semibold: "OnestSemiBold, sans-serif",
    bold: "OnestBold, sans-serif",
};
const weights = [400, 500, 600, 700];

const fontWeights = {
    regular: weights[0],
    medium: weights[1],
    semibold: weights[2],
    bold: weights[3],
};
const spacing = {
    small: customSpacing(0.5), // 0.5rem
    normal: customSpacing(1), // 1rem
    medium: customSpacing(1.125), // 1.125rem
    large: customSpacing(1.5), //1.5rem
    button: customSpacing(2.5), //2.5rem
    nav: customSpacing(5.65), // 5.65rem
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

const border = {
    custom: customBorder,
    input: customBorder("1px", colors.neutral.grey[300]),
    activeInput: customBorder("1px", colors.neutral.grey[100]),
};
const shadows = {
    inputs: "rgba(13, 94, 186, 0.2)",
};

export { colors, media, fontSize, fontFamily, borderRadius, spacing, border, fontWeights, shadows };
