import styled from "styled-components";
import { Input, InputProps, Select, SelectProps } from "antd";
import type { GetProps } from "antd";

type IProps = InputProps & {
    rounded?: boolean;
};
type ISelectProps = SelectProps & {
    rounded?: boolean;
};
type OTPProps = GetProps<typeof Input.OTP>;

const StyledInput = styled(Input)<{ $rounded?: boolean }>`
    height: ${({ theme }) => theme.spacing["4xl"]};
    padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
    border: ${({ theme }) => theme.border};
    border-radius: ${({ $rounded }) => ($rounded ? "4px" : 0)};
    outline: none;
    width: 100%;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-weight: 500;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        background: inherit;
        border-color: ${({ theme }) => theme.colors.primary};
    }
    &:active,
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(125, 103, 255, 0.35);
    }
`;
const StyledPwdInput = styled(Input.Password)`
    height: ${({ theme }) => theme.spacing["4xl"]};
    padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
    border: ${({ theme }) => theme.border};
    border-radius: 4px;
    outline: none;
    width: 100%;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-weight: 500;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 0 2px rgba(125, 103, 255, 0.35);

    &:hover {
        background: inherit;
        border-color: ${({ theme }) => theme.colors.primary};
    }
    &:active,
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35);
    }
`;
const StyledSelect = styled(Select)`
    height: ${({ theme }) => theme.spacing["4xl"]};
    .ant-select-selector {
        border: ${({ theme }) => theme.border} !important;
        box-shadow: 0 0 0 2px rgba(125, 103, 255, 0.35);
        background: transparent !important;
        border-radius: 4px;
        padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
        outline: none;
        width: 100%;
        font-family: ${({ theme }) => theme.fontFamily.sans};
        font-weight: 500;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    &:hover {
        background: inherit;
        border-color: ${({ theme }) => theme.colors.primary};
    }
    &:active,
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35);
    }
`;

const StyledOtpInput = styled.div`
    margin-bottom: 2rem;
    .ant-otp {
        column-gap: 1rem;
    }
    .ant-otp-input {
        height: ${({ theme }) => theme.spacing["4xl"]} !important;
        padding: ${({ theme }) => theme.spacing.double(0.5, 0.8)};
        border: ${({ theme }) => theme.border};
        border-radius: 4px;
        outline: none;
        width: 100%;
        font-family: ${({ theme }) => theme.fontFamily.sans};
        font-weight: 500;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};

        &:hover {
            background: inherit;
            border-color: ${({ theme }) => theme.colors.primary};
        }
        &:active,
        &:focus {
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 2px rgba(125, 103, 255, 0.35);
        }
    }
`;

export const CustomInput = ({ rounded, ...rest }: IProps) => {
    return <StyledInput $rounded={rounded} {...rest} />;
};
export const PasswordInput = ({ ...rest }: IProps) => {
    return <StyledPwdInput {...rest} />;
};
export const CustomSelect = ({ ...rest }: ISelectProps) => {
    return <StyledSelect {...rest} />;
};
export const CustomOtp = ({ onChange, onInput, onComplete }: OTPProps & any) => {
    return (
        <StyledOtpInput>
            <Input.OTP
                className="Customer"
                length={6}
                onChange={onChange}
                onInput={onInput}
                onInputCapture={onComplete}
            />
        </StyledOtpInput>
    );
};
