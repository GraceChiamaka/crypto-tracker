import styled from "styled-components";

const StyledInput = styled.input<{ fullWidth?: boolean }>`
    height: 42px;
    min-width: 120px;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[200])};

    caret-color: ${({ theme }) => theme.colors.neutral.grey[400]};
    color: ${({ theme }) => theme.colors.neutral.grey[400]};
    font-family: "DM Mono", sans-serif;
    outline: none;
    padding: ${({ theme }) => theme.spacing.double(0, 1)};
    &:hover {
        border: ${({ theme }) => theme.border.custom("1px", theme.colors.blue[400])};
        box-shadow: ${({ theme }) => ` 0 0 0 2px ${theme.shadows.inputs}`} !important;
    }
    &:active {
        &:hover {
            border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[400])};
            box-shadow: ${({ theme }) => ` 0 0 0 2px ${theme.shadows.inputs}`} !important;
        }
    }
`;

export const CustomInput = ({ fullWidth = false, ...rest }) => {
    return <StyledInput fullWidth={fullWidth} {...rest} />;
};
