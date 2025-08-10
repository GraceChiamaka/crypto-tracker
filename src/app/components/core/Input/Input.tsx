import styled from "styled-components";
import { Input, InputProps } from "antd";

type IProps = InputProps & {
    mode: "dark" | "light";
};

const StyledInput = styled(Input)<{ mode: IProps["mode"] }>`
    height: ${({ theme }) => theme.spacing["4xl"]};
    padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
    border: ${({ theme, mode }) => theme.border};
    border-radius: 0;
    outline: none;
    width: 100%;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    background: ${({ theme, mode }) => theme.colors.background};
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

export const CustomInput = ({ mode, ...rest }: IProps) => {
    return <StyledInput mode={mode} {...rest} />;
};
