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
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: ${({ theme }) => theme.fontSize.normal};
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
        opacity: 0.8;
    }
`;

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
