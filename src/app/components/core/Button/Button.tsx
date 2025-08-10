import { ReactNode } from "react";
import styled from "styled-components";

interface PropsWithStyle {
    style?: React.CSSProperties;
}

type ButtonProps = PropsWithStyle & {
    children: ReactNode | string | number;
    onClick?: () => void;
};

const StyledButton = styled.button`
    width: 100%;
    height: ${({ theme }) => theme.spacing.custom(2.75)};
    padding: ${({ theme }) => theme.spacing.double(0, 1.5)};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    font-size: ${({ theme }) => theme.fontSize.normal};
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
        transform: translateY(-1px);
    }

    /* &:before {
        pointer-events: none;
        content: "";
        position: absolute;
        border: ${({ theme }) => theme.border};
        border-radius: 4px;
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
    } */
`;

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
