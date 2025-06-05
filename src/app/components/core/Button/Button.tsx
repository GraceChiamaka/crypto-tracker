import { ReactNode } from "react";
import styled from "styled-components";

interface PropsWithStyle {
    style?: React.CSSProperties;
}

type ButtonProps = PropsWithStyle & {
    variant: "default" | "secondary" | "link" | "linkSecondary";
    outline?: boolean;
    children: ReactNode | string | number;
    onClick?: () => void;
};

const StyledButton = styled.button<{ outline?: boolean | string; variant: ButtonProps["variant"] }>`
    width: 100%;
    height: ${({ theme }) => theme.spacing.custom(2.75)};
    padding: ${({ theme }) => theme.spacing.double(0, 1.5)};
    background: ${({ theme, variant }) =>
        variant === "default" ? theme.colors.yellow[200] : theme.colors.neutral[200]};
    border: ${({ theme, outline }) => (outline === "true" ? theme.border.buttonBlack : "none")};
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border-radius: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    box-shadow: "0px 2px 2px rgba(12, 10, 1, 0.15), inset 0px 4px 0px rgba(255, 255, 255, 0.2), inset 0px -5px 0px rgba(12, 10, 1, 0.15)";
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;

    &:before {
        pointer-events: none;
        content: "";
        position: absolute;
        border: ${({ theme }) => theme.border.custom("2px", theme.colors.neutral[800])};
        top: -16px;
        right: -16px;
        bottom: -16px;
        left: -16px;
        opacity: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: top, right, bottom, left;
        transition-property: top, right, bottom, left;
    }
    &:hover {
        border-width: 0px;
        transition: border 0.3s ease-in-out;
        &:before,
        &:focus,
        &:before,
        &:active,
        &:before {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
            opacity: 1;
        }
    }
`;
const StyledLinkButton = styled.button<{ variant: "link" | "linkSecondary" }>`
    height: ${({ theme }) => theme.spacing.custom(2.75)};
    padding: ${({ theme }) => theme.spacing.double(0, 1.5)};
    background: ${({ theme, variant }) => (variant === "link" ? theme.colors.yellow[100] : theme.colors.neutral[200])};
    border: none;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: ${({ theme }) => theme.fontSize.normal};
    border-radius: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover {
    }
`;

export const Button = ({ outline, variant, children, ...rest }: ButtonProps) => {
    return variant === "link" || variant === "linkSecondary" ? (
        <StyledLinkButton variant={variant} {...rest}>
            {children}
        </StyledLinkButton>
    ) : (
        <StyledButton variant={variant} outline={outline?.toString() ?? "false"} {...rest}>
            {children}
        </StyledButton>
    );
};
