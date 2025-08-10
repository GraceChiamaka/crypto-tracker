import { Weights } from "../../../@types/styled";
import { ReactNode } from "react";

import styled, { DefaultTheme } from "styled-components";

export type TextVariants =
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "tagline"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5";

export interface PropsWithStyle {
    style?: React.CSSProperties;
}

interface PropsWithChildren {
    children: ReactNode;
}

type TextProps = PropsWithChildren &
    PropsWithStyle & {
        align?: "left" | "center" | "right";
        block?: boolean;
        /**
         * specify a color
         */
        color?: string;
        font?: "bio" | "reg";

        /**
         * specify the font-size
         *
         *
         * heading1 - 56px / 3.5rem | Line height: 120%,  Mobile:  40px / 2.5rem | Line height: 120%
         * heading2 - 48px / 3rem | Line height: 120%,    Mobile:  36px / 2.25rem | Line height: 120%
         * heading3 - 40px / 2.5rem | Line height: 120%,  Mobile:  32px / 2rem | Line height: 120%
         * heading4 - 32px / 2rem | Line height: 130%,    Mobile:  24px / 1.5rem | Line height: 130%
         * heading5 - 24px / 1.5rem | Line height: 140%,  Mobile:  20px / 1.25rem | Line height: 140%
         * heading6 - 20px / 1.25rem | Line height: 140%, Mobile:  18px / 1.125rem | Line height: 140%
         *
         * tagline -  16px / 1rem | Line height: 150%
         *
         * body1 - 20px / 1.25rem /Line height: 150%,
         * body2 - 18px / 1.125rem / Line height: 150%,
         * body3 - 16px / 1rem / Line height: 150%,
         * body4 - 14px / 0.875rem / Line height: 150%,
         * body5 - 12px / 0.75rem / Line height: 150%,
         *
         */
        variant: TextVariants;
        /**
         * specify a font-weight
         *
         * regular - 400,
         * medium - 500,
         * semibold - 600,
         * bold - 700
         */
        weight?: Weights;
    };

const variantOptions = (variant: TextVariants, theme: DefaultTheme) =>
    ({
        heading1: `
            font-size: ${theme.fontSize["6xl"]};
            line-height:  120%;
        `,
        heading2: `
            font-size: ${theme.fontSize["5xl"]};
            line-height:  120%;
        `,
        heading3: `
            font-size: ${theme.fontSize["4xl"]};
            line-height:  120%;
        `,
        heading4: `
            font-size: ${theme.fontSize["2xl"]};
            line-height:  130%;
        `,
        heading5: `
            font-size: ${theme.fontSize["xl"]};
            line-height:  140%;
        `,
        heading6: `
            font-size: ${theme.fontSize.large};
            line-height:  140%;
        `,
        tagline: `
            font-size: ${theme.fontSize.normal};
            line-height:  150%;
        `,
        body1: `
            font-size: ${theme.fontSize.large};
            line-height:  150%;
        `,
        body2: `
            font-size: ${theme.fontSize.normal};
            line-height:  165%;
        `,
        body3: `
            font-size: ${theme.fontSize.medium};
            line-height:  150%;
        `,
        body4: `
            font-size: ${theme.fontSize.small};
            line-height:  150%;
        `,
        body5: `
            font-size: ${theme.fontSize.tiny};
            line-height:  150%;
        `,
    }[variant]);
const variantOptionsMobile = (variant: TextVariants, theme: DefaultTheme) =>
    ({
        heading1: `
            font-size: ${theme.fontSize["4xl"]};
            line-height:  120%;
        `,
        heading2: `
            font-size: ${theme.fontSize["3xl"]};
            line-height:  120%;
        `,
        heading3: `
            font-size: ${theme.fontSize["2xl"]};
            line-height:  120%;
        `,
        heading4: `
            font-size: ${theme.fontSize["xl"]};
            line-height:  130%;
        `,
        heading5: `
            font-size: ${theme.fontSize.large};
            line-height:  140%;
        `,
        heading6: `
            font-size: ${theme.fontSize.medium};
            line-height:  140%;
        `,
        tagline: `
            font-size: ${theme.fontSize.normal};
            line-height:  150%;
        `,
        body1: `
            font-size: ${theme.fontSize.large};
            line-height:  150%;
        `,
        body2: `
            font-size: ${theme.fontSize.normal};
            line-height:  165%;
        `,
        body3: `
            font-size: ${theme.fontSize.medium};
            line-height:  150%;
        `,
        body4: `
            font-size: ${theme.fontSize.small};
            line-height:  150%;
        `,
        body5: `
            font-size: ${theme.fontSize.tiny};
            line-height:  150%;
        `,
    }[variant]);

const weightOptions = (variant: Weights, theme: DefaultTheme) =>
    ({
        bold: `
            font-family: ${theme.fontFamily.bold} !important;
            font-weight: ${theme.fontWeights[variant]};
        `,
        semibold: `
            font-family: ${theme.fontFamily.semibold} !important;
            font-weight: ${theme.fontWeights[variant]};
        `,
        medium: `
            font-family : ${theme.fontFamily.medium} !important;
            font-weight: ${theme.fontWeights[variant]};
        `,
        regular: `
            font-family: ${theme.fontFamily.regular} !important;
            font-weight: ${theme.fontWeights[variant]};
        `,
    }[variant]);

const generateFont = (variant: Weights, theme: DefaultTheme) =>
    ({
        bold: `
		font-family: ${theme.fontFamily.bioBold} !important;
		font-weight: ${theme.fontWeights[variant]};
	`,
        semibold: `
		font-family: ${theme.fontFamily.bioSM} !important;
		font-weight: ${theme.fontWeights[variant]};
	`,
        medium: `
		font-family : ${theme.fontFamily.bioMd} !important;
		font-weight: ${theme.fontWeights[variant]};
	`,
        regular: `
		font-family: ${theme.fontFamily.bio} !important;
		font-weight: ${theme.fontWeights[variant]};
	`,
    }[variant]);

export const StyledText = styled.span<{
    align?: "left" | "center" | "right";
    $block?: boolean;
    color?: string;
    font?: "bio" | "reg";
    variant: TextVariants;
    $weight?: Weights;
}>`
    color: ${({ theme, color }) => color ?? theme.colors.text};
    ${({ variant, theme }) => variantOptions(variant, theme)}
    ${({ $weight, font, theme }) =>
        $weight ? (font === "bio" ? generateFont($weight, theme) : weightOptions($weight, theme)) : null}
    display: ${({ $block }) => ($block ? "block" : "inline-block")};
    text-align: ${({ align }) => align ?? "left"};
    ${({ theme }) => theme.media.mobile} {
        ${({ variant, theme }) => variantOptionsMobile(variant, theme)}
    }
`;

export const Text = ({
    align = "left",
    block,
    color,
    children,
    font = "reg",
    style,
    variant,
    weight = "regular",
    ...rest
}: TextProps) => {
    return (
        <StyledText
            align={align}
            $block={block}
            color={color}
            font={font}
            variant={variant}
            $weight={weight}
            style={style}
            {...rest}
        >
            {children}
        </StyledText>
    );
};
