import "styled-components";

type ColorsTheme = {
    primary: {
        // 50: string;
        // 75: string;
        100: string;
        // 200: string;
        // 300: string;
        // 400: string;
        // 500: string;
        // 600: string;
        // 700: string;
        // 800: string;
        // 900: string;
    };

    secondary: {
        50: string;
    };
    neutral: {
        grey: {
            /** "#F9FAFB"; **/
            50: string;

            /* 75: "#F7F9FC"; */
            75: string;

            /* 100: "#F0F2F5"; */
            100: string;

            /* 200: "#E4E7EC"; */
            200: string;

            /* 300: "#D0D5DD"; */
            300: string;

            /* 400: "#98A2B3"; */
            400: string;

            /* 500: "#667185"; */
            500: string;

            /* 600: "#475367"; */
            600: string;

            /* 700: "#344054"; */
            700: string;

            /* 800: "#1D2739"; */
            800: string;

            /* 900: "#101928"; */
            900: string;
        };
        gray: {
            100: string;
        };
        brown: {
            50: string;
            75: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };

    green: {
        50: string;
        75: string;
        100: string;
        200: string;
    };
    white: string;
    black: string;
    blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
    };
    /**
     * specify color code
     * 50: #FBEAE9
     * 75: #D42620
     * 100: #F2BCBA
     **/
    red: {
        50: string;
        75: string;
        100: string;
    };
    yellow: {
        50: string;
        75: string;
        100: string;
    };
};

type FontSizes = {
    custom: (fontSize: number) => string /* custom */;
    tiny: string;
    small: string;
    normal: string /* normal 0.88rem */;
    displaySmall: string;
    displayLarge: string;
    heading1: string /* heading 2.5rem */;
    heading2: string /* heading 2.25rem */;
    heading3: string /* heading 2rem */;
    heading4: string /* heading 1.75rem */;
    heading5: string /* heading 1.5rem */;
    heading6: string /* heading 1.375rem */;
};

type FontFamily = {
    inter: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
};

export type Spacing = {
    small: string;
    normal: string;
    medium: string;
    large: string;
    button: string;
    nav: string;
    double: (value: number, value2: number) => string;
    custom: (val: number) => string;
};

export type Weights = "regular" | "medium" | "semibold" | "bold";

export type FontWeights = {
    [key in TextWeights]: number;
};

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ColorsTheme;
        fontSize: FontSizes;
        fontFamily: FontFamily;
        spacing: Spacing;
        media: any;
        borderRadius;
        border;
        fontWeights: FontWeights;
    }
}
