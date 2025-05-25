import { Select, SelectProps } from "antd";
import styled from "styled-components";

const Container = styled(Select)`
    height: 42px;
    font-family: "DM Mono", sans-serif;
    .ant-select-selector {
        border-radius: 4px;
        border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[200])};
        background: ${({ theme }) => theme.colors.white};
        caret-color: ${({ theme }) => theme.colors.black[200]};
        padding: ${({ theme }) => theme.spacing.double(0, 1)};
        outline: none;
        color: ${({ theme }) => theme.colors.black[200]};
        &:hover {
            border: ${({ theme }) => theme.border.custom("1px", theme.colors.blue[100])};
            box-shadow: ${({ theme }) => ` 0 0 0 2px ${theme.shadows.inputs}`} !important;
        }
    }
    .ant-select-focused {
        .ant-select-selector {
            box-shadow: ${({ theme }) => ` 0 2px 4px ${theme.shadows.inputs}`} !important;
            &:hover {
                box-shadow: ${({ theme }) => ` 0 2px 4px ${theme.shadows.inputs}`} !important;
                border: ${({ theme }) => theme.border.custom("1px", theme.colors.blue[100])};
            }
        }
    }
`;

export const CustomSelect = ({ children, ...rest }: SelectProps) => {
    return <Container {...rest}>{children}</Container>;
};
