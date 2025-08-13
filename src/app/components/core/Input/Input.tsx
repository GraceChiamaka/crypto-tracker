import styled from "styled-components";
import { Input, InputProps } from "antd";

type IProps = InputProps & {
    mode: "dark" | "light";
};

const StyledInput = styled(Input)`
    height: ${({ theme }) => theme.spacing["4xl"]};
    padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
    border: ${({ theme }) => theme.border};
    border-radius: 0;
    outline: none;
    width: 100%;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-weight: 500;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    &:hover {
        background: inherit;
        border-color: ${({ theme }) => theme.colors.background};
    }
    &:active,
    &:focus {
        border-color: ${({ theme }) => theme.colors.background};
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35);
    }
`;

export const CustomInput = ({ ...rest }: IProps) => {
    return <StyledInput {...rest} />;
};
