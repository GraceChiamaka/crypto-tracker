import { ReactNode } from "react";
import styled from "styled-components";

type IButtonProps = {
    children: string | ReactNode;
    variant: "default" | "secondary";
};

const StyledButton = styled.button<{ variant: IButtonProps["variant"] }>`
    display: flex;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    background: ${({ theme, variant }) => (variant === "default" ? theme.colors.black[200] : theme.colors.white)};
    color: ${({ theme, variant }) => (variant === "default" ? theme.colors.white : theme.colors.black[500])};
    height: 42px;
    border: ${({ theme, variant }) =>
        theme.border.custom("1px", variant === "default" ? theme.colors.primary[100] : theme.colors.black[100])};
    font-family: "DM Mono", monospace;
    font-size: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) => theme.spacing.double(0, 1)};
    &:hover {
        background: ${({ theme, variant }) =>
            variant === "default" ? theme.colors.black[100] : theme.colors.primary[100]} !important;
        color: ${({ theme, variant }) =>
            variant === "default" ? theme.colors.white : theme.colors.black[100]} !important;
        border: ${({ theme, variant }) =>
            variant === "secondary"
                ? theme.border.custom("1px", theme.colors.black[100])
                : theme.border.custom("1px", theme.colors.black[200])} !important;
    }
`;

export const CustomButton = ({ variant = "default", children, ...rest }: IButtonProps) => {
    return (
        <StyledButton type={"button"} variant={variant} {...rest}>
            {children}
        </StyledButton>
    );
};
