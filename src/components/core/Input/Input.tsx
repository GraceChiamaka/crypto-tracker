import styled from "styled-components";

const StyledInput = styled.input`
    height: 42px;
    min-width: 120px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[200])};
    &:hover {
        border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[400])};
    }
    caret-color: ${({ theme }) => theme.colors.black[400]};
    color: ${({ theme }) => theme.colors.black[400]};
    font-family: "DM Mono", sans-serif;
    outline: none;
    padding: ${({ theme }) => theme.spacing.double(0, 1)};
`;

export const CustomInput = ({ ...rest }) => {
    return <StyledInput {...rest} />;
};
